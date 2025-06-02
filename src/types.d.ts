interface MonthlyDataEntry {
    month: number;
    year: number;
    count: number;
}

interface ProductMetrics {
    totalSales: number;
    averagePrice: number;
    inventory: number;
}

interface UserStats {
    activeUsers: number;
    premiumUsers: number;
    churnRate: number;
    satisfaction: number;
}

interface AppPerformance {
    responseTime: number;
    uptime: number;
}

interface Financials {
    revenue: number;
    expenses: number;
    profit: number;
    taxRate: number;
}

interface Data {
    date: string;
    productMetrics: ProductMetrics;
    userStats: UserStats;
    appPerformance: AppPerformance;
    monthlyData: MonthlyDataEntry[];
    financials: Financials;
}
