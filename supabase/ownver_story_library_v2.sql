alter table public.ownver_stories alter column video_path drop not null;

create or replace function public.enforce_ownver_story_limit()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  if (select count(*) from public.ownver_stories) >= 20 then
    raise exception 'OWNVER story limit is 20';
  end if;
  return new;
end;
$$;

revoke all on function public.enforce_ownver_story_limit() from public, anon, authenticated;

create trigger ownver_story_limit
before insert on public.ownver_stories
for each row execute function public.enforce_ownver_story_limit();
