create table if not exists public.ownver_customer_stories (
  id uuid primary key default gen_random_uuid(),
  word text not null check (word ~ '^[A-Z0-9]{3,8}$'),
  story text not null check (char_length(story) between 10 and 1000),
  contact text not null check (char_length(contact) between 3 and 200),
  willing_to_publish boolean not null default false,
  source text not null default 'website_purchase_modal' check (char_length(source) <= 60),
  created_at timestamptz not null default now()
);

alter table public.ownver_customer_stories enable row level security;
revoke all on public.ownver_customer_stories from anon, authenticated;
grant insert on public.ownver_customer_stories to anon, authenticated;
grant select, update, delete on public.ownver_customer_stories to authenticated;

create policy "website visitors can submit stories"
on public.ownver_customer_stories for insert to anon, authenticated
with check (
  word ~ '^[A-Z0-9]{3,8}$'
  and char_length(story) between 10 and 1000
  and char_length(contact) between 3 and 200
  and source = 'website_purchase_modal'
);

create policy "owner can read customer stories"
on public.ownver_customer_stories for select to authenticated
using ((select auth.jwt()->>'email') = 'qoo0985797341@gmail.com');

create policy "owner can update customer stories"
on public.ownver_customer_stories for update to authenticated
using ((select auth.jwt()->>'email') = 'qoo0985797341@gmail.com')
with check ((select auth.jwt()->>'email') = 'qoo0985797341@gmail.com');

create policy "owner can delete customer stories"
on public.ownver_customer_stories for delete to authenticated
using ((select auth.jwt()->>'email') = 'qoo0985797341@gmail.com');
