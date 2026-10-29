-- Seed categories
INSERT INTO categories (slug, name, description) VALUES
  ('web-development', 'Web Development', 'Articles about web development technologies and best practices'),
  ('mobile-apps', 'Mobile Apps', 'iOS and Android development insights'),
  ('ai-ml', 'AI & Machine Learning', 'Artificial intelligence and machine learning trends'),
  ('saas', 'SaaS Business', 'SaaS product development and growth strategies'),
  ('automation', 'Automation', 'Process automation and workflow optimization');

-- Seed services
INSERT INTO services (slug, title, description, short_description, icon, features, benefits, technologies, pricing_start, process, faqs, order) VALUES
  (
    'website-development',
    'Website Development',
    'We build stunning, high-performance websites that convert visitors into customers. From landing pages to complex web applications, our team delivers pixel-perfect, responsive websites using the latest technologies.',
    'Custom websites built for performance, conversion, and growth.',
    'Globe',
    ARRAY['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration', 'Custom Animations', 'Analytics Setup'],
    ARRAY['Increased Conversions', 'Better Search Rankings', 'Mobile-First Experience', 'Easy Content Management', 'Scalable Architecture'],
    ARRAY['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WordPress', 'Strapi'],
    2500,
    '[
      {"step": 1, "title": "Discovery", "description": "We analyze your business goals, target audience, and competitors to create a strategic plan."},
      {"step": 2, "title": "Design", "description": "Our designers create wireframes and high-fidelity mockups tailored to your brand."},
      {"step": 3, "title": "Development", "description": "We build your website with clean, maintainable code using modern frameworks."},
      {"step": 4, "title": "Testing", "description": "Rigorous testing across devices, browsers, and performance benchmarks."},
      {"step": 5, "title": "Launch", "description": "We deploy your site with CI/CD, monitoring, and ongoing support."}
    ]'::jsonb,
    '[
      {"question": "How long does it take to build a website?", "answer": "A standard business website takes 2-4 weeks, while complex web applications may take 6-12 weeks depending on features."},
      {"question": "Do you provide website maintenance?", "answer": "Yes, we offer monthly maintenance packages including updates, security patches, and performance monitoring."},
      {"question": "Can I update the website myself?", "answer": "Absolutely. We integrate user-friendly CMS solutions so you can easily manage content without coding."}
    ]'::jsonb,
    1
  ),
  (
    'ecommerce-development',
    'E-commerce Development',
    'Launch a powerful online store that drives sales. We specialize in building custom e-commerce solutions with seamless checkout experiences, inventory management, and payment integrations.',
    'High-converting online stores with seamless shopping experiences.',
    'ShoppingCart',
    ARRAY['Custom Storefront', 'Payment Integration', 'Inventory Management', 'User Accounts', 'Order Tracking', 'Multi-currency Support'],
    ARRAY['Higher Sales', 'Reduced Cart Abandonment', 'Streamlined Operations', 'Global Reach', 'Data-Driven Insights'],
    ARRAY['Shopify', 'WooCommerce', 'Next.js', 'Stripe', 'PayPal', 'Snipcart'],
    5000,
    '[
      {"step": 1, "title": "Strategy", "description": "We define your product catalog, target market, and revenue goals."},
      {"step": 2, "title": "UX Design", "description": "Optimized shopping flows that minimize friction and maximize conversions."},
      {"step": 3, "title": "Development", "description": "Robust backend with secure payment processing and inventory sync."},
      {"step": 4, "title": "Integration", "description": "Connect shipping, tax, CRM, and marketing automation tools."},
      {"step": 5, "title": "Optimization", "description": "A/B testing, performance tuning, and conversion rate optimization."}
    ]'::jsonb,
    '[
      {"question": "Which e-commerce platform do you recommend?", "answer": "We recommend Shopify for ease of use, or custom Next.js solutions for maximum flexibility and performance."},
      {"question": "Can you migrate my existing store?", "answer": "Yes, we handle migrations from WooCommerce, Magento, and other platforms with zero data loss."},
      {"question": "Do you handle payment gateway setup?", "answer": "We integrate Stripe, PayPal, Square, and other gateways with full PCI compliance."}
    ]'::jsonb,
    2
  ),
  (
    'ai-agent-development',
    'AI Agent Development',
    'Harness the power of artificial intelligence with custom AI agents. We build intelligent assistants, chatbots, and automation agents that understand context, learn from interactions, and deliver real business value.',
    'Intelligent AI agents that automate tasks and enhance customer experiences.',
    'Brain',
    ARRAY['Natural Language Processing', 'Context Awareness', 'Multi-platform Integration', 'Custom Training', 'Analytics Dashboard', 'Human Handoff'],
    ARRAY['24/7 Customer Support', 'Reduced Operational Costs', 'Faster Response Times', 'Scalable Interactions', 'Data-Driven Insights'],
    ARRAY['OpenAI', 'LangChain', 'Python', 'FastAPI', 'Vector Databases', 'RAG'],
    8000,
    '[
      {"step": 1, "title": "Requirements", "description": "Define use cases, conversation flows, and integration requirements."},
      {"step": 2, "title": "Data Preparation", "description": "Curate and structure training data for optimal agent performance."},
      {"step": 3, "title": "Model Selection", "description": "Choose the right LLM and architecture for your specific needs."},
      {"step": 4, "title": "Development", "description": "Build the agent with RAG, tool use, and custom logic."},
      {"step": 5, "title": "Deployment", "description": "Deploy with monitoring, feedback loops, and continuous improvement."}
    ]'::jsonb,
    '[
      {"question": "What types of AI agents can you build?", "answer": "We build customer support bots, sales assistants, internal knowledge agents, coding assistants, and task automation agents."},
      {"question": "How do you ensure data privacy?", "answer": "We implement enterprise-grade security, data encryption, and can deploy on-premise or in your private cloud."},
      {"question": "Can AI agents integrate with my existing tools?", "answer": "Yes, we integrate with CRMs, help desks, Slack, Teams, and any API-enabled system."}
    ]'::jsonb,
    3
  ),
  (
    'automation-solutions',
    'Automation Solutions',
    'Eliminate repetitive tasks and streamline your workflows. Our automation solutions connect your tools, automate data flows, and create intelligent workflows that save hours of manual work every week.',
    'Smart automation that connects your tools and eliminates busywork.',
    'Zap',
    ARRAY['Workflow Automation', 'API Integration', 'Data Sync', 'Report Generation', 'Email Automation', 'Notification Systems'],
    ARRAY['Time Savings', 'Error Reduction', 'Cost Efficiency', 'Scalable Operations', 'Better Compliance'],
    ARRAY['n8n', 'Make', 'Zapier', 'Python', 'Node.js', 'PostgreSQL'],
    3000,
    '[
      {"step": 1, "title": "Audit", "description": "Map your current workflows and identify automation opportunities."},
      {"step": 2, "title": "Design", "description": "Design optimized workflows with decision logic and error handling."},
      {"step": 3, "title": "Integration", "description": "Connect your existing tools via APIs and webhooks."},
      {"step": 4, "title": "Testing", "description": "Validate workflows with real data and edge case handling."},
      {"step": 5, "title": "Monitoring", "description": "Set up dashboards, alerts, and continuous optimization."}
    ]'::jsonb,
    '[
      {"question": "What processes can be automated?", "answer": "Data entry, report generation, email campaigns, lead routing, invoice processing, social media posting, and much more."},
      {"question": "Do I need to change my existing tools?", "answer": "No, we work with your existing stack and integrate via APIs."},
      {"question": "How quickly can automation be implemented?", "answer": "Simple automations take 1-2 weeks. Complex enterprise workflows typically take 4-8 weeks."}
    ]'::jsonb,
    4
  ),
  (
    'mobile-app-development',
    'Mobile App Development',
    'Build native-quality mobile apps for iOS and Android. We create performant, user-friendly apps using React Native and Flutter, ensuring consistent experiences across all devices with a single codebase.',
    'Cross-platform mobile apps that users love.',
    'Smartphone',
    ARRAY['iOS & Android', 'Push Notifications', 'Offline Support', 'Biometric Auth', 'In-App Purchases', 'Real-time Sync'],
    ARRAY['Wider Reach', 'Faster Development', 'Lower Costs', 'Consistent UX', 'Easy Updates'],
    ARRAY['React Native', 'Flutter', 'TypeScript', 'Firebase', 'Supabase', 'Expo'],
    10000,
    '[
      {"step": 1, "title": "Planning", "description": "Define features, user flows, and technical architecture."},
      {"step": 2, "title": "UI/UX Design", "description": "Create intuitive interfaces following platform guidelines."},
      {"step": 3, "title": "Development", "description": "Build with React Native or Flutter for cross-platform efficiency."},
      {"step": 4, "title": "Testing", "description": "Device testing, performance optimization, and security audits."},
      {"step": 5, "title": "App Store Launch", "description": "Prepare assets, metadata, and submit to App Store and Play Store."}
    ]'::jsonb,
    '[
      {"question": "Native or cross-platform?", "answer": "We recommend cross-platform (React Native/Flutter) for most apps, delivering 90% of native performance at half the cost."},
      {"question": "How long does app development take?", "answer": "MVP apps take 8-12 weeks. Feature-rich apps typically require 16-24 weeks."},
      {"question": "Do you handle app store submissions?", "answer": "Yes, we handle the entire submission process including assets, descriptions, and compliance."}
    ]'::jsonb,
    5
  ),
  (
    'dashboard-development',
    'Dashboard Development',
    'Transform your data into actionable insights with custom dashboards. We build real-time analytics dashboards, admin panels, and business intelligence tools that help you make data-driven decisions.',
    'Real-time dashboards that turn data into decisions.',
    'LayoutDashboard',
    ARRAY['Real-time Data', 'Interactive Charts', 'Custom Filters', 'Export Reports', 'Role-based Access', 'Mobile Responsive'],
    ARRAY['Better Decisions', 'Time Savings', 'Improved Transparency', 'Scalable Insights', 'Custom Metrics'],
    ARRAY['Next.js', 'React', 'D3.js', 'Recharts', 'PostgreSQL', 'Supabase'],
    6000,
    '[
      {"step": 1, "title": "Data Analysis", "description": "Identify key metrics, data sources, and visualization requirements."},
      {"step": 2, "title": "Wireframing", "description": "Design dashboard layouts optimized for your workflows."},
      {"step": 3, "title": "Development", "description": "Build with real-time data connections and interactive components."},
      {"step": 4, "title": "Integration", "description": "Connect to your databases, APIs, and third-party services."},
      {"step": 5, "title": "Training", "description": "Document features and train your team on dashboard usage."}
    ]'::jsonb,
    '[
      {"question": "Can dashboards connect to my existing database?", "answer": "Yes, we connect to PostgreSQL, MySQL, MongoDB, BigQuery, and any API-enabled data source."},
      {"question": "Are dashboards mobile-friendly?", "answer": "All our dashboards are fully responsive and work great on tablets and phones."},
      {"question": "Can I get real-time updates?", "answer": "Yes, we implement real-time data streaming using WebSockets and server-sent events."}
    ]'::jsonb,
    6
  ),
  (
    'api-development',
    'API Development',
    'Build robust, scalable APIs that power your applications. We design RESTful and GraphQL APIs with comprehensive documentation, authentication, and rate limiting to ensure reliability and security.',
    'Scalable APIs that power your digital ecosystem.',
    'Webhook',
    ARRAY['REST & GraphQL', 'Authentication', 'Rate Limiting', 'API Documentation', 'Versioning', 'Webhooks'],
    ARRAY['Faster Development', 'System Integration', 'Third-party Access', 'Scalable Architecture', 'Secure Data Exchange'],
    ARRAY['Node.js', 'Python', 'FastAPI', 'GraphQL', 'PostgreSQL', 'Redis'],
    4000,
    '[
      {"step": 1, "title": "API Design", "description": "Design endpoints, data models, and authentication strategy."},
      {"step": 2, "title": "Development", "description": "Build with clean architecture, validation, and error handling."},
      {"step": 3, "title": "Security", "description": "Implement OAuth, JWT, rate limiting, and input sanitization."},
      {"step": 4, "title": "Documentation", "description": "Generate interactive docs with Swagger/OpenAPI."},
      {"step": 5, "title": "Deployment", "description": "Deploy with monitoring, logging, and auto-scaling."}
    ]'::jsonb,
    '[
      {"question": "REST or GraphQL?", "answer": "We recommend GraphQL for complex data relationships and REST for simpler, cache-heavy APIs. We can also provide both."},
      {"question": "How do you handle API security?", "answer": "We implement OAuth 2.0, API keys, rate limiting, input validation, and HTTPS enforcement."},
      {"question": "Can you integrate with third-party APIs?", "answer": "Yes, we integrate with Stripe, Twilio, SendGrid, Salesforce, and hundreds of other services."}
    ]'::jsonb,
    7
  );

-- Seed pricing packages
INSERT INTO pricing_packages (name, description, price, billing_period, features, popular, order) VALUES
  (
    'Starter',
    'Perfect for small businesses and startups getting started.',
    2500,
    'one_time',
    ARRAY[
      'Up to 5 pages',
      'Mobile Responsive',
      'Basic SEO Setup',
      'Contact Form',
      '2 Rounds of Revisions',
      '30 Days Support'
    ],
    false,
    1
  ),
  (
    'Professional',
    'Ideal for growing businesses that need more features and flexibility.',
    7500,
    'one_time',
    ARRAY[
      'Up to 15 pages',
      'Custom Design',
      'Advanced SEO',
      'CMS Integration',
      'Blog Setup',
      'Analytics Dashboard',
      '5 Rounds of Revisions',
      '90 Days Support',
      'Speed Optimization'
    ],
    true,
    2
  ),
  (
    'Enterprise',
    'For large organizations requiring custom solutions and dedicated support.',
    20000,
    'one_time',
    ARRAY[
      'Unlimited Pages',
      'Custom Web Application',
      'Advanced Integrations',
      'Multi-language Support',
      'Priority Support',
      'Dedicated Account Manager',
      'Unlimited Revisions',
      '1 Year Support',
      'Performance Monitoring',
      'Security Audit',
      'Custom Features'
    ],
    false,
    3
  );

-- Seed portfolio items
INSERT INTO portfolio_items (slug, title, description, short_description, client_name, category, technologies, image_urls, results, live_url, featured) VALUES
  (
    'nexus-ai-workspace',
    'NexusAI — Autonomous AI Business Workspace & Multi-Agent OS',
    'Enterprise AI operating system featuring autonomous task agents, LangChain RAG vector knowledge base, and live operations dashboard.',
    'All-in-one autonomous AI operations platform with RAG, custom agent workflows, and live token analytics.',
    'Nexus Enterprise Labs',
    'AI Agent',
    ARRAY['Next.js 15', 'FastAPI', 'LangChain', 'OpenAI', 'pgvector', 'TypeScript', 'Tailwind CSS'],
    ARRAY['/portfolio/nexusai.png'],
    '85% reduction in support response latency, 4.2x faster document processing via RAG, 99.98% system uptime.',
    'https://nexusai-akash-rathour-projects.vercel.app',
    true
  ),
  (
    'vendrix-ecommerce-store',
    'Vendrix — Ultra-Fast Curated Lifestyle E-Commerce Store',
    'Modern lifestyle storefront featuring dynamic multi-category filtering, instant slide-over cart, coupon engine, and 99+ Lighthouse performance.',
    'Ultra-fast headless lifestyle store with real-time cart drawer, instant coupon engine, and Stripe checkout.',
    'Vendrix Retail Co.',
    'E-Commerce',
    ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Zustand', 'Framer Motion'],
    ARRAY['/portfolio/vendrix.png'],
    '3.4x conversion uplift, 99+ mobile Lighthouse score, sub-second product filtering across 1,000+ SKUs.',
    'https://vendrix.shop',
    true
  ),
  (
    'datasphere-ai-data-analyst',
    'DataSphere AI — Autonomous In-Browser Data Analyst & Intelligence Suite',
    'Zero-latency in-browser CSV/Excel data intelligence platform enabling natural language queries, automated cleaning, anomaly detection, and instant charts.',
    'Autonomous in-browser data intelligence suite with zero-server privacy, DuckDB WebAssembly, and AI chart generation.',
    'DataSphere Analytics',
    'Dashboard',
    ARRAY['Next.js', 'TypeScript', 'WebAssembly', 'DuckDB', 'OpenAI API', 'Recharts', 'Tailwind CSS'],
    ARRAY['/portfolio/datasphere.png'],
    '15+ hours/week saved for business analysts, zero-server privacy-preserving processing for 500k+ row datasets.',
    'https://datasphere-lemon.vercel.app/ai-data-analyst',
    true
  ),
  (
    'emeralds-greens-luxury-resort',
    'Emeralds Greens — Luxury Golf Resort & Nature Sanctuary Portal',
    'Ultra-premium hospitality portal showcasing championship golf courses, luxury private villas, wellness retreats, and direct booking engine.',
    'Editorial luxury hospitality portal with immersive suite galleries, championship golf tour, and direct reservation engine.',
    'Emeralds Greens Hospitality Group',
    'Web App',
    ARRAY['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Direct Booking API', 'Responsive Web Vitals'],
    ARRAY['/portfolio/emeralds-greens.png'],
    '180% surge in direct villa & tee-time reservations, zero third-party OTA commissions, 65% longer average session duration.',
    'https://emeralds-greens.vercel.app',
    true
  );

-- Seed case studies
INSERT INTO case_studies (slug, title, client_name, industry, problem, solution, technologies, timeline, outcome, business_impact, metrics, image_urls) VALUES
  (
    'nexusai-enterprise-ai-agent',
    'How NexusAI Cut Customer Support Latency by 85% with Autonomous Multi-Agent RAG',
    'Nexus Enterprise Labs',
    'AI SaaS & Enterprise Ops',
    'Enterprise support and operational teams were losing 30+ hours weekly handling repetitive customer inquiries, complex document searches across knowledge bases, and manual data summaries.',
    'We engineered NexusAI, an end-to-end autonomous business operating system featuring LangChain RAG pipelines, FastAPI orchestration, vector embeddings with pgvector, and multi-agent coordination.',
    ARRAY['Next.js 15', 'FastAPI', 'LangChain', 'OpenAI', 'pgvector', 'TypeScript', 'Tailwind CSS'],
    '6 weeks',
    'Autonomous AI support agent handles 80%+ of incoming inquiries with zero human handoff, while response latency dropped from hours to seconds.',
    'Operational support costs dropped by 65%, document query speed surged 4.2x, and customer satisfaction reached 98.4%.',
    '[
      {"label": "Latency Cut", "value": "-85%"},
      {"label": "Doc Search Speed", "value": "4.2x"},
      {"label": "Auto Resolution", "value": "82%"},
      {"label": "System Uptime", "value": "99.98%"}
    ]'::jsonb,
    ARRAY['/portfolio/nexusai.png']
  ),
  (
    'vendrix-ecommerce-scale',
    'How Vendrix Scaled to 3.4x Conversion with a Headless Next.js Storefront',
    'Vendrix Retail Co.',
    'E-Commerce & Retail',
    'Vendrix operated on a bloated monolithic store with 4.5s initial load times, sluggish mobile navigation, and an abandoned cart rate exceeding 72% due to a cumbersome multi-page checkout flow.',
    'We built Vendrix as an ultra-fast headless e-commerce application utilizing Next.js, Tailwind CSS, Zustand, and Stripe with an interactive slide-over cart drawer and instant coupon engine.',
    ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Zustand', 'Framer Motion'],
    '4 weeks',
    'Mobile Lighthouse scores jumped to 99/100, page transition times dropped to under 150ms, and checkout conversion surged dramatically.',
    'Conversion rate increased by 3.4x, cart abandonment fell by 38%, and average order value rose by 24% through intelligent threshold prompts.',
    '[
      {"label": "Conversion Rate", "value": "3.4x"},
      {"label": "Lighthouse Score", "value": "99/100"},
      {"label": "Cart Abandonment", "value": "-38%"},
      {"label": "AOV Increase", "value": "+24%"}
    ]'::jsonb,
    ARRAY['/portfolio/vendrix.png']
  ),
  (
    'datasphere-in-browser-analytics',
    'DataSphere AI: Eliminating Cloud Compute Costs with Client-Side AI Data Analytics',
    'DataSphere Analytics',
    'Data Intelligence & Analytics',
    'Data analysts and finance teams needed to explore sensitive 500k-row CSV and Excel datasets with AI assistance, but company compliance prohibited uploading proprietary spreadsheets to third-party cloud servers.',
    'We engineered DataSphere AI, an in-browser analytics engine powered by WebAssembly (DuckDB) and interactive Recharts with zero server uploads and instant AI chart generation.',
    ARRAY['Next.js', 'TypeScript', 'WebAssembly', 'DuckDB', 'OpenAI API', 'Recharts', 'Tailwind CSS'],
    '5 weeks',
    'Zero-latency spreadsheet processing with total compliance adherence. Analysts can chat with their data and export finished executive decks in seconds.',
    'Saved 15+ manual reporting hours every week, reduced cloud server compute costs by $1,800/month, and ensured zero data leaks.',
    '[
      {"label": "Weekly Hours Saved", "value": "15+ hrs"},
      {"label": "Dataset Processing", "value": "500K+ rows"},
      {"label": "Cloud Cost Saved", "value": "$1.8K/mo"},
      {"label": "Privacy Rating", "value": "100%"}
    ]'::jsonb,
    ARRAY['/portfolio/datasphere.png']
  ),
  (
    'emeralds-greens-luxury-hospitality',
    'Emeralds Greens: Generating 180% More Direct Bookings for Luxury Resort & Golf Club',
    'Emeralds Greens Hospitality Group',
    'Luxury Hospitality & Real Estate',
    'Emeralds Greens was surrendering 18-22% in commission fees to online travel agencies (OTAs) because their legacy web portal failed to convey the resort luxury ambiance or allow direct villa reservations.',
    'We designed and developed an editorial luxury digital experience with bespoke emerald styling, smooth 60fps micro-animations, interactive villa tours, golf course previews, and an integrated reservation inquiry calendar.',
    ARRAY['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Direct Booking API', 'Responsive Web Vitals'],
    '4 weeks',
    'Direct guest reservations skyrocketed while average on-site user engagement increased by 65%.',
    '180% increase in direct bookings within 90 days, saving hundreds of thousands in third-party commissions while elevating brand prestige.',
    '[
      {"label": "Direct Bookings", "value": "+180%"},
      {"label": "OTA Fees Saved", "value": "100%"},
      {"label": "Session Duration", "value": "+65%"},
      {"label": "Mobile Bounce Rate", "value": "-42%"}
    ]'::jsonb,
    ARRAY['/portfolio/emeralds-greens.png']
  );

-- Seed testimonials
INSERT INTO testimonials (name, company, role, content, rating, approved) VALUES
  (
    'Sarah Mitchell',
    'TechStart Inc.',
    'CEO',
    'Nexus Dev Studio transformed our online presence completely. The new website increased our lead generation by 300% in just two months. Their attention to detail and technical expertise is unmatched.',
    5,
    true
  ),
  (
    'James Rodriguez',
    'RetailMax',
    'CTO',
    'The automation solution they built saved our team 40 hours per week. The ROI was visible within the first month. Highly professional and incredibly skilled team.',
    5,
    true
  ),
  (
    'Emily Chen',
    'HealthPlus',
    'Product Manager',
    'Our mobile app launch was a huge success thanks to Nexus Dev. They delivered on time, communicated clearly throughout, and the app quality exceeded our expectations.',
    5,
    true
  ),
  (
    'Michael Torres',
    'FinanceFlow',
    'Founder',
    'The dashboard they built gives us real-time insights we never had before. It has become the central tool for our decision-making process. Exceptional work.',
    5,
    true
  );
