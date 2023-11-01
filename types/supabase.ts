export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Message: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          send_user: string | null;
          user: string | null;
          value: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          send_user?: string | null;
          user?: string | null;
          value?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
          send_user?: string | null;
          user?: string | null;
          value?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "Message_send_user_fkey";
            columns: ["send_user"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Message_user_fkey";
            columns: ["user"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      profiles: {
        Row: {
          id: string;
          name: string | null;
        };
        Insert: {
          id: string;
          name?: string | null;
        };
        Update: {
          id?: string;
          name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
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
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
