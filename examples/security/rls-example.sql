-- PUBLIC SHOWCASE ONLY.
-- These demo objects are not production table or policy definitions.

alter table public.booking_requests_demo enable row level security;

-- Anonymous visitors may submit a request but cannot read it back.
grant insert on public.booking_requests_demo to anon;
revoke select, update, delete on public.booking_requests_demo from anon;

create policy "anonymous_can_submit_booking_request"
on public.booking_requests_demo
for insert
to anon
with check (true);

-- Authenticated staff may read rows only when membership matches the company.
create policy "staff_can_read_company_booking_requests"
on public.booking_requests_demo
for select
to authenticated
using (
  exists (
    select 1
    from public.team_members_demo membership
    where membership.user_id = auth.uid()
      and membership.company_id = booking_requests_demo.company_id
      and membership.active = true
  )
);

-- A production implementation should also include abuse controls, rate limits,
-- validation and policies for every write path that the application exposes.
