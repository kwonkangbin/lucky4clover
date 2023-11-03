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
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Message_user_fkey";
            columns: ["user"];
            isOneToOne: false;
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
      getuserbyid: {
        Args: {
          user_id: string;
        };
        Returns: {
          raw_user_meta_data: { name: string };
        }[];
      };
      getuserranking: {
        Args: {
          user_id: string;
        };
        Returns: {
          auth_id: string;
          raw_user_meta_data: { name: string };
          message_count: number;
          message_count_rank: number;
        }[];
      };
      getusersranking: {
        Args: {
          limit_num: number;
          offset_num: number;
        };
        Returns: {
          id: string;
          raw_user_meta_data: { name: string };
          message_count: number;
          message_count_rank: number;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
