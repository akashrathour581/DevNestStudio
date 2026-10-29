export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          avatar_url: string | null;
          role: string;
          company: string | null;
          phone: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name: string;
          avatar_url?: string | null;
          role?: string;
          company?: string | null;
          phone?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          avatar_url?: string | null;
          role?: string;
          company?: string | null;
          phone?: string | null;
          created_at?: string;
        };
      };
      leads: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          subject: string;
          message: string;
          budget: string | null;
          status: string;
          source: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          subject: string;
          message: string;
          budget?: string | null;
          status?: string;
          source?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          subject?: string;
          message?: string;
          budget?: string | null;
          status?: string;
          source?: string;
          created_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          client_id: string;
          status: string;
          priority: string;
          budget: number | null;
          start_date: string | null;
          end_date: string | null;
          progress: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          client_id: string;
          status?: string;
          priority?: string;
          budget?: number | null;
          start_date?: string | null;
          end_date?: string | null;
          progress?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          client_id?: string;
          status?: string;
          priority?: string;
          budget?: number | null;
          start_date?: string | null;
          end_date?: string | null;
          progress?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      project_files: {
        Row: {
          id: string;
          project_id: string;
          name: string;
          url: string;
          size: number;
          type: string;
          uploaded_by: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          name: string;
          url: string;
          size: number;
          type: string;
          uploaded_by: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          name?: string;
          url?: string;
          size?: number;
          type?: string;
          uploaded_by?: string;
          created_at?: string;
        };
      };
      messages: {
        Row: {
          id: string;
          project_id: string | null;
          sender_id: string;
          content: string;
          attachments: string[] | null;
          read: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id?: string | null;
          sender_id: string;
          content: string;
          attachments?: string[] | null;
          read?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string | null;
          sender_id?: string;
          content?: string;
          attachments?: string[] | null;
          read?: boolean;
          created_at?: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          name: string;
          company: string;
          role: string;
          content: string;
          rating: number;
          avatar_url: string | null;
          project_id: string | null;
          approved: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          company: string;
          role: string;
          content: string;
          rating: number;
          avatar_url?: string | null;
          project_id?: string | null;
          approved?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          company?: string;
          role?: string;
          content?: string;
          rating?: number;
          avatar_url?: string | null;
          project_id?: string | null;
          approved?: boolean;
          created_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          slug: string;
          title: string;
          description: string;
          short_description: string;
          icon: string;
          features: string[];
          benefits: string[];
          technologies: string[];
          pricing_start: number;
          process: Json;
          faqs: Json;
          image_url: string | null;
          order: number;
          active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description: string;
          short_description: string;
          icon: string;
          features: string[];
          benefits: string[];
          technologies: string[];
          pricing_start: number;
          process?: Json;
          faqs?: Json;
          image_url?: string | null;
          order?: number;
          active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          description?: string;
          short_description?: string;
          icon?: string;
          features?: string[];
          benefits?: string[];
          technologies?: string[];
          pricing_start?: number;
          process?: Json;
          faqs?: Json;
          image_url?: string | null;
          order?: number;
          active?: boolean;
          created_at?: string;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          cover_image: string | null;
          category_id: string;
          author_id: string;
          published: boolean;
          featured: boolean;
          views: number;
          meta_title: string | null;
          meta_description: string | null;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          cover_image?: string | null;
          category_id: string;
          author_id: string;
          published?: boolean;
          featured?: boolean;
          views?: number;
          meta_title?: string | null;
          meta_description?: string | null;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          excerpt?: string;
          content?: string;
          cover_image?: string | null;
          category_id?: string;
          author_id?: string;
          published?: boolean;
          featured?: boolean;
          views?: number;
          meta_title?: string | null;
          meta_description?: string | null;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      categories: {
        Row: {
          id: string;
          slug: string;
          name: string;
          description: string | null;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          description?: string | null;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          description?: string | null;
        };
      };
      portfolio_items: {
        Row: {
          id: string;
          slug: string;
          title: string;
          description: string;
          short_description: string;
          client_name: string;
          category: string;
          technologies: string[];
          image_urls: string[];
          results: string;
          live_url: string | null;
          github_url: string | null;
          featured: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description: string;
          short_description: string;
          client_name: string;
          category: string;
          technologies: string[];
          image_urls: string[];
          results: string;
          live_url?: string | null;
          github_url?: string | null;
          featured?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          description?: string;
          short_description?: string;
          client_name?: string;
          category?: string;
          technologies?: string[];
          image_urls?: string[];
          results?: string;
          live_url?: string | null;
          github_url?: string | null;
          featured?: boolean;
          created_at?: string;
        };
      };
      case_studies: {
        Row: {
          id: string;
          slug: string;
          title: string;
          client_name: string;
          industry: string;
          problem: string;
          solution: string;
          technologies: string[];
          timeline: string;
          outcome: string;
          business_impact: string;
          metrics: Json;
          image_urls: string[];
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          client_name: string;
          industry: string;
          problem: string;
          solution: string;
          technologies: string[];
          timeline: string;
          outcome: string;
          business_impact: string;
          metrics?: Json;
          image_urls: string[];
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          client_name?: string;
          industry?: string;
          problem?: string;
          solution?: string;
          technologies?: string[];
          timeline?: string;
          outcome?: string;
          business_impact?: string;
          metrics?: Json;
          image_urls?: string[];
          created_at?: string;
        };
      };
      requirements: {
        Row: {
          id: string;
          title: string;
          description: string;
          budget: string;
          timeline: string;
          email: string;
          name: string;
          attachments: string[] | null;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          budget: string;
          timeline: string;
          email: string;
          name: string;
          attachments?: string[] | null;
          status?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          budget?: string;
          timeline?: string;
          email?: string;
          name?: string;
          attachments?: string[] | null;
          status?: string;
          created_at?: string;
        };
      };
      invoices: {
        Row: {
          id: string;
          project_id: string;
          client_id: string;
          amount: number;
          status: string;
          due_date: string;
          paid_at: string | null;
          items: Json;
          notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          client_id: string;
          amount: number;
          status?: string;
          due_date: string;
          paid_at?: string | null;
          items?: Json;
          notes?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          client_id?: string;
          amount?: number;
          status?: string;
          due_date?: string;
          paid_at?: string | null;
          items?: Json;
          notes?: string | null;
          created_at?: string;
        };
      };
      pricing_packages: {
        Row: {
          id: string;
          name: string;
          description: string;
          price: number;
          billing_period: string;
          features: string[];
          popular: boolean;
          order: number;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          price: number;
          billing_period?: string;
          features: string[];
          popular?: boolean;
          order?: number;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          price?: number;
          billing_period?: string;
          features?: string[];
          popular?: boolean;
          order?: number;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
};

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
export type Insertables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];
export type Updatables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"];
