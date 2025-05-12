
/**
 * API Service
 * 
 * This service simulates communication with a backend API.
 * In a real application, these functions would make actual HTTP requests.
 */

// For simulating API request delays
const simulateDelay = (ms: number = 800) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data for plans
const plans = [
  {
    id: "basic",
    name: "Básico",
    price: "R$ 29,99",
    description: "Recursos essenciais para projetos pequenos e/ou pessoais.",
    features: [
      "Domínios: 1",
      "vCPU: 2 cores",
      "RAM: 5 GB DDR4",
      "Armazenamento SSD NVMe: 15 GB",
      "Subdomínios: Ilimitados",
      "Rede: 1 Gbps",
      "Web Server: OpenLiteSpeed + LSCache",
      "CloudLinux: Sim",
      "Backups: a cada 12 h",
      "SSL: Let's Encrypt gratuito",
      "E-mail profissional: 10 contas",
      "AntiSpam Pro: SpamAssassin + ClamAV",
      "Webmail: Roundcube integrado",
      "FTP: Contas FTP ilimitadas",
      "Banco de dados: MySQL/MariaDB + Adminer",
      "Cron Jobs: 2",
      "1-Clique WordPress: WP-CLI ou Softaculous (opc.)",
      "Plugins Premium Grátis: Sim (via Softaculous/CLI)",
    ],
  },
  {
    id: "essential",
    name: "Essencial",
    price: "R$ 39,99",
    description: "Ideal para projetos de médio porte.",
    features: [
      "Domínios: 2",
      "vCPU: 2 cores",
      "RAM: 5 GB DDR4",
      "Armazenamento SSD NVMe: 25 GB",
      "Subdomínios: Ilimitados",
      "Rede: 1 Gbps",
      "Web Server: OpenLiteSpeed + LSCache",
      "CloudLinux: Sim",
      "Backups: a cada 12 h",
      "SSL: Let's Encrypt gratuito",
      "E-mail profissional: 25 contas",
      "AntiSpam Pro: SpamAssassin + ClamAV",
      "Webmail: Roundcube integrado",
      "FTP: Contas FTP ilimitadas",
      "Banco de dados: MySQL/MariaDB + Adminer",
      "Cron Jobs: 5",
      "1-Clique WordPress: WP-CLI ou Softaculous (opc.)",
      "Plugins Premium Grátis: Sim (via Softaculous/CLI)",
    ],
  },
  {
    id: "professional",
    name: "Profissional",
    price: "R$ 59,99",
    description: "Para empresas e projetos avançados.",
    features: [
      "Domínios: 3",
      "vCPU: 2 cores",
      "RAM: 5 GB DDR4",
      "Armazenamento SSD NVMe: 50 GB",
      "Subdomínios: Ilimitados",
      "Rede: 1 Gbps",
      "Web Server: OpenLiteSpeed + LSCache",
      "CloudLinux: Sim",
      "Backups: a cada 12 h",
      "SSL: Let's Encrypt gratuito",
      "E-mail profissional: 50 contas",
      "AntiSpam Pro: SpamAssassin + ClamAV",
      "Webmail: Roundcube integrado",
      "FTP: Contas FTP ilimitadas",
      "Banco de dados: MySQL/MariaDB + Adminer",
      "Cron Jobs: 10",
      "1-Clique WordPress: WP-CLI ou Softaculous (opc.)",
      "Plugins Premium Grátis: Sim (via Softaculous/CLI)",
    ],
  },
];

// Authentication service
export const authService = {
  login: async (email: string, password: string) => {
    await simulateDelay();
    
    // Simulate login validation
    if (email && password.length >= 6) {
      // Store session in localStorage (simulating JWT token)
      localStorage.setItem('demo-user-session', 'true');
      localStorage.setItem('demo-user-email', email);
      return { success: true, message: 'Login successful' };
    }
    
    throw new Error('Invalid email or password');
  },
  
  logout: async () => {
    await simulateDelay(300);
    localStorage.removeItem('demo-user-session');
    localStorage.removeItem('demo-user-email');
    localStorage.removeItem('demo-user-plan');
    return { success: true, message: 'Logout successful' };
  },
  
  register: async (email: string, password: string, name: string) => {
    await simulateDelay(1200);
    
    // Simulate registration
    if (email && password.length >= 6 && name) {
      // In a real app, this would create a user in the database
      localStorage.setItem('demo-user-session', 'true');
      localStorage.setItem('demo-user-email', email);
      return { success: true, message: 'Registration successful' };
    }
    
    throw new Error('Registration failed. Please check your information.');
  },
  
  isAuthenticated: () => {
    return localStorage.getItem('demo-user-session') === 'true';
  },
  
  getCurrentUserEmail: () => {
    return localStorage.getItem('demo-user-email') || '';
  }
};

// Plans service
export const plansService = {
  // Get all available plans
  getAllPlans: async () => {
    await simulateDelay();
    return plans;
  },
  
  // Get plan by ID
  getPlanById: async (planId: string) => {
    await simulateDelay();
    const plan = plans.find(p => p.id === planId);
    
    if (!plan) {
      throw new Error('Plan not found');
    }
    
    return plan;
  },
  
  // Get current user's plan
  getCurrentUserPlan: async () => {
    await simulateDelay();
    
    // Get plan ID from localStorage (simulating database)
    const planId = localStorage.getItem('demo-user-plan') || 'essential';
    const plan = plans.find(p => p.id === planId);
    
    if (!plan) {
      return plans[1]; // Default to essential plan
    }
    
    return plan;
  },
  
  // Update user's plan
  updatePlan: async (planId: string) => {
    await simulateDelay(1500);
    
    const plan = plans.find(p => p.id === planId);
    if (!plan) {
      throw new Error('Invalid plan selected');
    }
    
    // Update in localStorage (simulating database update)
    localStorage.setItem('demo-user-plan', planId);
    
    return { 
      success: true, 
      message: `Plano atualizado para ${plan.name} com sucesso` 
    };
  }
};

// Payment service (simulated Stripe integration)
export const paymentService = {
  // Process a payment
  processPayment: async (paymentDetails: any) => {
    await simulateDelay(2000);
    
    // Simulate payment processing
    // In a real app, this would integrate with Stripe API
    if (!paymentDetails.cardNumber || !paymentDetails.expiryDate || !paymentDetails.cvv) {
      throw new Error('Invalid payment information');
    }
    
    // Simulate successful payment
    return {
      success: true,
      transactionId: 'sim_' + Math.random().toString(36).substring(2, 15),
      message: 'Payment processed successfully'
    };
  },
  
  // Get payment methods
  getPaymentMethods: async () => {
    await simulateDelay();
    
    // Simulate fetching payment methods
    // In a real app, this would fetch from Stripe
    return [
      {
        id: 'pm_123456',
        brand: 'visa',
        last4: '4242',
        expMonth: 12,
        expYear: 2024,
        isDefault: true
      }
    ];
  },
  
  // Add payment method
  addPaymentMethod: async (paymentDetails: any) => {
    await simulateDelay(1500);
    
    // Simulate adding payment method
    // In a real app, this would integrate with Stripe
    return {
      success: true,
      id: 'pm_' + Math.random().toString(36).substring(2, 15),
      message: 'Payment method added successfully'
    };
  }
};

// User account service
export const userService = {
  // Get user profile
  getUserProfile: async () => {
    await simulateDelay();
    
    // In a real app, this would fetch from the database
    return {
      name: 'Cliente Exemplo',
      email: authService.getCurrentUserEmail() || 'cliente@exemplo.com',
      planId: localStorage.getItem('demo-user-plan') || 'essential',
      memberSince: '01/01/2023',
      nextBillingDate: '01/01/2024',
    };
  },
  
  // Update user profile
  updateUserProfile: async (profileData: any) => {
    await simulateDelay(1000);
    
    // In a real app, this would update the database
    if (!profileData.name || !profileData.email) {
      throw new Error('Nome e email são obrigatórios');
    }
    
    // Update email in localStorage
    if (profileData.email) {
      localStorage.setItem('demo-user-email', profileData.email);
    }
    
    return {
      success: true,
      message: 'Perfil atualizado com sucesso'
    };
  },
  
  // Change password
  changePassword: async (currentPassword: string, newPassword: string) => {
    await simulateDelay(1200);
    
    // In a real app, this would validate the current password and update in the database
    if (currentPassword.length < 6 || newPassword.length < 6) {
      throw new Error('As senhas devem ter pelo menos 6 caracteres');
    }
    
    return {
      success: true,
      message: 'Senha atualizada com sucesso'
    };
  }
};
