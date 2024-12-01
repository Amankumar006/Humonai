(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const profileMenu = document.getElementById('profileMenu');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const sidebar = document.getElementById('sidebar');
    const userIcon = document.querySelector('.fa-user');
    const burgerMenu = document.querySelector('.burger-menu');
    const closeBtn = document.querySelector('.closebtn');
    const mainContent = document.querySelector('.main-content');
    const searchInput = document.getElementById('search');
    const searchResults = document.getElementById('searchResults');

    const init = () => {
      loadDarkMode();
      attachEventListeners();
      initCarousel();
    };

    const attachEventListeners = () => {
      if (userIcon) userIcon.addEventListener('click', toggleProfileMenu);
      document.addEventListener('click', handleDocumentClick);
      if (darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);
      if (burgerMenu) burgerMenu.addEventListener('click', toggleSidebar);
      if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
      if (searchInput) searchInput.addEventListener('input', performSearch);
    };

    const toggleProfileMenu = (event) => {
      event.stopPropagation();
      if (profileMenu) {
        profileMenu.classList.toggle('show');
      }
    };

    const handleDocumentClick = (event) => {
      if (!event.target.closest('.fa-user') && !event.target.closest('.profile-menu')) {
        if (profileMenu) {
          profileMenu.classList.remove('show');
        }
      }
      if (!event.target.closest('.sidebar') && !event.target.closest('.burger-menu')) {
        closeSidebar();
      }
    };

    const toggleDarkMode = () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    };

    const loadDarkMode = () => {
      if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
      }
    };

    const toggleSidebar = () => {
      if (sidebar) {
        if (sidebar.style.width === '250px') {
          closeSidebar();
        } else {
          openSidebar();
        }
      }
    };

    const openSidebar = () => {
      if (sidebar) {
        sidebar.style.width = '250px';
        if (mainContent) mainContent.classList.add('open-sidebar');
      }
    };

    const closeSidebar = () => {
      if (sidebar) {
        sidebar.style.width = '0';
        if (mainContent) mainContent.classList.remove('open-sidebar');
      }
    };

    const contentData = [
      {
        title: 'Humonai V.1',
        description: 'AI.V1 offers courses on maximizing productivity with AI chat GPT. Optimize your work results efficiently through our training.',
        link: 'humonaiv1.html'
      },
      {
        title: 'Humonai V.2',
        description: 'AI.V2\'s chatbot suggests AI tools to boost productivity and save time. Get tailored recommendations for your needs instantly.',
        link: 'humonaiv2.html'
      },
      {
        title: 'About Humonai V.1 & V.2',
        description: 'Humonai offers courses on using AI chat GPT for enhanced work results and increased productivity. Learn to leverage AI chat GPT effectively through Humonai.V1 courses to optimize your work outcomes and boost productivity significantly.',
        link: 'about.html'
      },
      {
        title: 'Tech Articles',
        description: 'Explore a broad range of topics related to technology, including reviews of the latest gadgets, discussions on emerging trends in the tech industry, tutorials on how to use different software or devices, and analyses of technological advancements.',
        link: 'techarticle.html',
      },
      {
        title: 'AI Bot Spotlight',
        description: 'Explore new releases, cutting-edge features, and advancements in artificial intelligence-driven virtual assistants. Get insights, reviews, and direct links to explore these exciting additions to the AI landscape.',
        link: 'aibot.html',
      },
      {
        title: 'Tech Innovations & AI Advancements',
        description: 'Explore new AI technologies, breakthroughs, and their applications across various sectors. Stay updated with the intersection of AI and tech, featuring in-depth analyses, reviews, and links to explore these cutting-edge developments further.',
        link: '#',
      },
      {
        title: 'Self-Driving Cars',
        description: 'Discover the latest advancements in self-driving car technology, including the role of VCs and the military in fueling self-driving startups that do not need roads.',
        link: 'selfdriving.html',
      },
      {
        title: 'Mobile AI Applications',
        description: 'Learn about the latest developments in AI-powered mobile applications, including significant revenue spikes following the launch of new AI models.',
        link: 'mobileai.html',
      },
      {
        title: 'Cybersecurity Trends',
        description: 'Stay informed about the latest trends in cybersecurity, including major acquisitions and advancements in machine-to-machine security.',
        link: 'cybersecurity.html',
      },
      {
        title: 'Social Media Innovations',
        description: 'Explore how social media platforms are evolving, with insights into new community-building apps and the expansion of social media companies into new areas.',
        link: 'socialmedia.html',
      },
      {
        title: 'Quantum Computing',
        description: 'Dive into the world of quantum computing, exploring the latest research, applications, and potential future impacts of this revolutionary technology.',
        link: 'quantumcomputing.html',
      },
      {
        title: 'Blockchain Technology',
        description: 'Understand the fundamentals of blockchain technology and its diverse applications beyond cryptocurrencies, including its potential to transform various industries.',
        link: 'blockchain.html'
      },
      {
        title: 'Augmented Reality',
        description: 'Discover how augmented reality is being integrated into different sectors, from gaming and entertainment to education and healthcare, providing new ways to interact with digital content.',
        link: 'augmentedreality.html',
      },
      {
        title: 'Wearable Technology',
        description: 'Explore the latest trends in wearable technology, including smartwatches, fitness trackers, and advanced health monitoring devices that are changing the way we track and manage our health.',
        link: 'wearabletech.html',
      },
      {
        title: '5G Technology',
        description: 'Learn about the rollout of 5G technology, its potential to revolutionize internet connectivity, and its implications for various industries, from telecommunications to smart cities.',
        link: '5gtechnology.html',
      },
      {
        title: 'Internet of Things (IoT)',
        description: 'Understand how IoT devices are connecting our world, enabling smart homes, smart cities, and enhanced industrial processes through the power of interconnected devices.',
        link: 'iot.html',
      },
      {
        title: 'Robotics',
        description: 'Get insights into the latest advancements in robotics, including their applications in manufacturing, healthcare, and everyday life, and how they are shaping the future of automation.',
        link: 'robotics.html',
      },
      {
        title: 'Cloud Computing',
        description: 'Explore the benefits and challenges of cloud computing, including how businesses are leveraging cloud services for scalability, flexibility, and cost-efficiency.',
        link: 'cloudcomputing.html',
      },
      {
        title: 'Big Data Analytics',
         description: 'Understand how big data analytics is transforming industries by providing deeper insights into customer behavior, operational efficiencies, and strategic decision-making.',
        link: 'bigdata.html',
      },
      {
        title: 'Artificial Intelligence in Healthcare',
         description: 'Learn how AI is being used to revolutionize healthcare, from improving diagnostics and personalized treatment plans to enhancing patient care and streamlining administrative tasks.',
        link: 'aihealthcare.html',
      },
      {
        title: 'Digital Transformation',
         description: 'Discover how organizations are undergoing digital transformation to enhance their operations, improve customer experiences, and stay competitive in a rapidly evolving digital landscape.',
        link: 'digitaltransformation.html',
      },
      {
        title: 'E-commerce Trends',
        description: 'Stay updated with the latest trends in e-commerce, including new technologies, customer behaviors, and strategies that are shaping the future of online shopping.',
        link: 'ecommerce.html',
      },
      {
        title: 'Fintech Innovations',
        description: 'Explore the latest innovations in fintech, including new payment solutions, digital banking, and blockchain-based financial services that are disrupting traditional finance.',
        link: 'fintech.html',
      },
      {
        title: 'speech Recogination',
        description: 'AI bots can accurately transcribe and understand human speech, enabling seamless voice interactions.',
        link: '/humonaiv1/AI Bot Spotlight/aibot.html',
      },
      {

        title:'machine learning',
        description: 'AI bots learn from data and improve over time, providing more accurate and efficient responses.',
        link: '/humonaiv1/AI Bot Spotlight/aibot.html',
      },
      {
        title: 'Natural Language Processing',
        description: 'AI bots understand and generate human language, making interactions more natural and intuitive.',
        link: '/humonaiv1/AI Bot Spotlight/aibot.html',
      },
      {
        title: 'Computer Visions',
        description: 'AI bots can analyze and interpret visual data, enabling applications in image recognition and object detection.',
        link: '/humonaiv1/AI Bot Spotlight/aibot.html',
      },
      {
        title: 'Decision Makings',
        description: 'AI bots can assist in decision-making processes by analyzing large datasets and providing insights.',
        link: '/humonaiv1/AI Bot Spotlight/aibot.html',
      },
      {
        title: 'Automation',
        description: 'AI bots can automate repetitive tasks, freeing up time for more strategic activities.',
        link: '/humonaiv1/AI Bot Spotlight/aibot.html',
      },
    ];

    const searchContent = (query) => {
      return contentData.filter(item => {
        const title = item.title ? item.title.toLowerCase() : '';
        const description = item.description ? item.description.toLowerCase() : '';
        return title.includes(query.toLowerCase()) || description.includes(query.toLowerCase());
      });
    };

    const displaySearchResults = (results) => {
      if (searchResults) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
          searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
        } else {
          results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `<a href="${result.link}">${result.title}</a><p>${result.description}</p>`;
            searchResults.appendChild(resultItem);
          });
        }

        searchResults.style.display = 'block';
      }
    };

    const performSearch = () => {
      const query = searchInput ? searchInput.value.trim() : '';
      if (query) {
        const results = searchContent(query);
        displaySearchResults(results);
      } else if (searchResults) {
        searchResults.style.display = 'none';
      }
    };

    // Carousel Functionality
    let currentSlideIndex = 0;
    const slideIntervalTime = 5000; // Time in milliseconds for automatic slide transition
    let slideInterval;

    const initCarousel = () => {
      showSlide(currentSlideIndex);
      startSlideInterval();
    };

    const moveSlide = (n) => {
      showSlide(currentSlideIndex += n);
    };

    const showSlide = (n) => {
      const slides = document.getElementsByClassName("slide");
      if (n >= slides.length) {
        currentSlideIndex = 0;
      }
      if (n < 0) {
        currentSlideIndex = slides.length - 1;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[currentSlideIndex].style.display = "block";
    };

    const startSlideInterval = () => {
      slideInterval = setInterval(() => moveSlide(1), slideIntervalTime);
    };

    const stopSlideInterval = () => {
      clearInterval(slideInterval);
    };

    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    if (carousel) {
      carousel.addEventListener('mouseover', stopSlideInterval);
      carousel.addEventListener('mouseout', startSlideInterval);
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', () => moveSlide(-1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => moveSlide(1));
    }

    init();
  });
})();
