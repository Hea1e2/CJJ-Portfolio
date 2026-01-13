document.addEventListener('DOMContentLoaded', () => {
    initProjects();
    initAIGC();
    initAnimations();
    initNavbar();
});

// Render Projects
function initProjects() {
    const grid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Render all projects
    projects.forEach(project => {
        const card = createProjectCard(project);
        grid.appendChild(card);
    });

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            const cards = document.querySelectorAll('.project-card');

            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);

    const mediaHtml = project.mediaType === 'video'
        ? `<video src="${project.src}" muted loop playsinline onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;"></video>`
        : `<img src="${project.src}" alt="${project.title}" loading="lazy">`;

    // Create tags HTML
    const tagsHtml = project.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('');

    // Create buttons based on available resources
    let buttonsHtml = '';

    if (project.link && project.gallery && project.gallery.length > 0) {
        // Both link and gallery - show two buttons
        buttonsHtml = `
            <div class="card-footer">
                <a href="#" class="card-link link-btn" data-project-id="${project.id}">
                    <i class="fas fa-external-link-alt"></i> 在线体验
                </a>
                <a href="#" class="card-link detail-btn" data-project-id="${project.id}">
                    <i class="fas fa-images"></i> 查看详情
                </a>
            </div>
        `;
    } else if (project.link) {
        // Only link - show one button
        buttonsHtml = `
            <div class="card-footer">
                <a href="#" class="card-link link-btn" data-project-id="${project.id}">
                    <i class="fas fa-external-link-alt"></i> 在线体验
                </a>
            </div>
        `;
    } else if (project.gallery && project.gallery.length > 0) {
        // Only gallery - show one button
        buttonsHtml = `
            <div class="card-footer">
                <a href="#" class="card-link detail-btn" data-project-id="${project.id}">
                    <i class="fas fa-images"></i> 查看详情
                </a>
            </div>
        `;
    }

    card.innerHTML = `
        <div class="card-media">
            ${mediaHtml}
        </div>
        <div class="card-content">
            <div class="card-tags">
                ${tagsHtml}
            </div>
            <h3 class="card-title">${project.title}</h3>
            <p class="card-desc">${project.desc}</p>
            ${buttonsHtml}
        </div>
    `;

    // Add click events to buttons
    const linkBtn = card.querySelector('.link-btn');
    const detailBtn = card.querySelector('.detail-btn');

    if (linkBtn) {
        linkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(project.link, '_blank');
        });
    }

    if (detailBtn) {
        detailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal(project);
        });
    }

    return card;
}

// Render AIGC Videos
function initAIGC() {
    const wall = document.getElementById('video-wall');

    // Intersection Observer for lazy loading (优化移动端，提前更多距离加载)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                if (video.dataset.src) {
                    video.src = video.dataset.src;
                    video.removeAttribute('data-src');
                    // 添加加载错误处理
                    video.addEventListener('error', function () {
                        console.error('视频加载失败:', video.dataset.src || video.src);
                        this.style.display = 'none';
                    });
                    // 确保视频可见
                    video.addEventListener('loadeddata', function () {
                        this.style.opacity = '1';
                        this.style.visibility = 'visible';
                    }, { once: true });
                    video.load(); // 强制加载
                    observer.unobserve(video);
                }
            }
        });
    }, { rootMargin: '200px' }); // 增加到200px，移动端提前加载

    aigcVideos.forEach(filename => {
        const item = document.createElement('div');
        item.className = 'video-item';

        // Remove .mp4 for name display
        const name = filename.replace('.mp4', '');

        item.innerHTML = `
            <video data-src="AIGC/${filename}#t=0.1" loop muted playsinline preload="metadata" style="background: rgba(255,255,255,0.05);"></video>
            <div class="video-overlay">
                <span style="color: white; font-size: 0.9rem;">${name}</span>
                <i class="fas fa-play" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 1.5rem; opacity: 0.8;"></i>
            </div>
        `;

        const videoEl = item.querySelector('video');
        observer.observe(videoEl);

        // 添加视频加载完成后的处理
        videoEl.addEventListener('loadeddata', function () {
            this.style.opacity = '1';
            // 移动端显示第一帧
            if (this.readyState >= 2) {
                this.currentTime = 0.1;
            }
        });

        // Hover events
        item.addEventListener('mouseenter', () => {
            videoEl.play().catch(e => console.log('Autoplay prevented', e));
        });
        item.addEventListener('mouseleave', () => {
            videoEl.pause();
            videoEl.currentTime = 0;
        });

        // Click to open modal and play full video
        item.addEventListener('click', () => {
            openVideoModal(filename, name);
        });

        wall.appendChild(item);
    });
}

// Animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section, .card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add CSS class for animation dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Navbar Scroll Effect
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(3, 0, 20, 0.95)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.background = 'rgba(3, 0, 20, 0.8)';
            navbar.style.padding = '20px 0';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Video Modal Functions
function openVideoModal(filename, title) {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const modalTitle = document.getElementById('modal-title');

    // Set video source and title
    modalVideo.src = `AIGC/${filename}`;
    modalTitle.textContent = title;

    // Show modal
    modal.style.display = 'flex';

    // Play video
    modalVideo.play().catch(e => console.log('Video play error:', e));

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');

    // Pause and reset video
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.src = '';

    // Hide modal
    modal.style.display = 'none';

    // Restore body scroll
    document.body.style.overflow = '';
}

// Initialize modal close events
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.modal-close');

    // Close on X button click
    closeBtn.addEventListener('click', closeVideoModal);

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVideoModal();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeVideoModal();
        }
    });
});

// Project Detail Modal Functions
let currentGallery = [];
let currentGalleryIndex = 0;

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('project-modal-title');
    const modalMedia = document.getElementById('project-modal-media');
    const carouselControls = document.getElementById('carousel-controls');

    // Set title
    modalTitle.textContent = project.title;

    // Set gallery
    currentGallery = project.gallery || [];
    currentGalleryIndex = 0;

    // Show/hide carousel controls
    if (currentGallery.length > 1) {
        carouselControls.style.display = 'flex';
    } else {
        carouselControls.style.display = 'none';
    }

    // Render first item
    renderGalleryItem();

    // Show modal
    modal.style.display = 'flex';

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    const modalMedia = document.getElementById('project-modal-media');

    // Clear media
    modalMedia.innerHTML = '';

    // Reset gallery
    currentGallery = [];
    currentGalleryIndex = 0;

    // Hide modal
    modal.style.display = 'none';

    // Restore body scroll
    document.body.style.overflow = '';
}

function renderGalleryItem() {
    const modalMedia = document.getElementById('project-modal-media');
    const indicator = document.getElementById('carousel-indicator');

    if (currentGallery.length === 0) return;

    const item = currentGallery[currentGalleryIndex];

    // Clear previous content
    modalMedia.innerHTML = '';

    // Render based on type
    if (item.type === 'video') {
        const video = document.createElement('video');
        video.src = item.src;
        video.controls = true;
        video.playsinline = true;
        video.style.maxWidth = '100%';
        video.style.maxHeight = '70vh';
        video.style.borderRadius = '12px';
        modalMedia.appendChild(video);
    } else if (item.type === 'image') {
        const img = document.createElement('img');
        img.src = item.src;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '70vh';
        img.style.borderRadius = '12px';
        img.style.objectFit = 'contain';
        modalMedia.appendChild(img);
    }

    // Update indicator
    if (currentGallery.length > 1) {
        indicator.textContent = `${currentGalleryIndex + 1} / ${currentGallery.length}`;
    }
}

function nextGalleryItem() {
    if (currentGallery.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % currentGallery.length;
    renderGalleryItem();
}

function prevGalleryItem() {
    if (currentGallery.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + currentGallery.length) % currentGallery.length;
    renderGalleryItem();
}

// Initialize project modal close events
document.addEventListener('DOMContentLoaded', () => {
    const projectModal = document.getElementById('project-modal');
    const projectCloseBtn = document.getElementById('project-modal-close');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    // Close on X button
    projectCloseBtn.addEventListener('click', closeProjectModal);

    // Close on background click
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });

    // Carousel controls
    prevBtn.addEventListener('click', prevGalleryItem);
    nextBtn.addEventListener('click', nextGalleryItem);

    // Close on ESC key (for project modal)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.style.display === 'flex') {
            closeProjectModal();
        }
    });

    // Arrow keys for navigation
    document.addEventListener('keydown', (e) => {
        if (projectModal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                prevGalleryItem();
            } else if (e.key === 'ArrowRight') {
                nextGalleryItem();
            }
        }
    });
});

