ALTER TABLE public.board_members ADD CONSTRAINT board_members_board_id_fkey FOREIGN KEY (board_id) REFERENCES public.boards (id) ON UPDATE CASCADE ON DELETE CASCADE;
