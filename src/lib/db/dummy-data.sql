-- Insert into accounts table
INSERT INTO accounts (id, first_name, last_name, email, email_verified)
VALUES
('550e8400-e29b-41d4-a716-446655440000', 'John', 'Doe', 'john@example.com', '2023-08-19T12:00:00Z'),
('04138e2c-b3a1-44a0-9d51-e0ea4e5d0000', 'Jane', 'Smith', 'jane@example.com', '2023-08-18T15:30:00Z');

-- Insert into contact_groups table
INSERT INTO contact_groups (account_id, id, group_name, contact_frequency, color)
VALUES
('550e8400-e29b-41d4-a716-446655440000', 'ab93d15c-8641-49ab-9e6f-996dc1f30000', 'Friends', 7, 'blue'),
('04138e2c-b3a1-44a0-9d51-e0ea4e5d0000', 'f52b55e1-88a2-4db1-85e6-41807e150000', 'Colleagues', 5, 'green');

-- Insert into contacts table
INSERT INTO contacts (account_id, id, first_name, last_name, last_contacted, contact_group_id, profile_url)
VALUES
('550e8400-e29b-41d4-a716-446655440000', 'Alice', 'Johnson', '2023-08-17T09:00:00Z', 'ab93d15c-8641-49ab-9e6f-996dc1f30000', 'https://example.com/alice'),
('04138e2c-b3a1-44a0-9d51-e0ea4e5d0000', 'Bob', 'Williams', '2023-08-16T14:45:00Z', 'f52b55e1-88a2-4db1-85e6-41807e150000', 'https://example.com/bob'),
('550e8400-e29b-41d4-a716-446655440000', 'Carol', 'Smith', '2023-08-15T11:30:00Z', 'ab93d15c-8641-49ab-9e6f-996dc1f30000', 'https://example.com/carol'),
('550e8400-e29b-41d4-a716-446655440000', 'David', 'Jones', '2023-08-14T19:15:00Z', 'f52b55e1-88a2-4db1-85e6-41807e150000', 'https://example.com/david'),
('550e8400-e29b-41d4-a716-446655440000', 'Eve', 'Miller', '2023-08-13T08:20:00Z', 'ab93d15c-8641-49ab-9e6f-996dc1f30000', 'https://example.com/eve'),
('550e8400-e29b-41d4-a716-446655440000', 'Frank', 'Brown', '2023-08-12T17:40:00Z', 'f52b55e1-88a2-4db1-85e6-41807e150000', 'https://example.com/frank'),
('550e8400-e29b-41d4-a716-446655440000', 'Grace', 'Taylor', '2023-08-11T14:10:00Z', 'ab93d15c-8641-49ab-9e6f-996dc1f30000', 'https://example.com/grace'),
('550e8400-e29b-41d4-a716-446655440000', 'Henry', 'Martin', '2023-08-10T22:50:00Z', 'f52b55e1-88a2-4db1-85e6-41807e150000', 'https://example.com/henry'),
('550e8400-e29b-41d4-a716-446655440000', 'Ivy', 'Lee', '2023-08-09T12:15:00Z', 'ab93d15c-8641-49ab-9e6f-996dc1f30000', 'https://example.com/ivy'),
('550e8400-e29b-41d4-a716-446655440000', 'Jack', 'Johnson', '2023-08-08T09:30:00Z', 'f52b55e1-88a2-4db1-85e6-41807e150000', 'https://example.com/jack');

-- Insert into addresses table
INSERT INTO addresses (id, contact_id, label, street1, city, postal_code, country)
VALUES
('4f14e18f-3ac4-4b9f-bf3f-7451a44e0000', '24c730dd-3a7a-48dd-9f4f-b849fa160000', 'Home', '123 Main St', 'Cityville', '12345', 'Countryland'),
('83ebd4d1-af52-47f1-978e-b8de8c890000', '91fc2491-8ed2-45ab-b793-cc2a06d80000', 'Work', '456 Office Rd', 'Townsville', '54321', 'Workland');

-- Insert into phone_numbers table
INSERT INTO phone_numbers (id, contact_id, label, phone)
VALUES
('a3b3b38b-5b98-4f3e-8f63-c06b70e90000', '24c730dd-3a7a-48dd-9f4f-b849fa160000', 'Mobile', '+1234567890'),
('b5bbf244-42d5-45dd-89ef-ae5053e90000', '91fc2491-8ed2-45ab-b793-cc2a06d80000', 'Work', '+9876543210');

-- Insert into emails table
INSERT INTO emails (id, contact_id, label, email)
VALUES
('c2c8a2d1-0f3f-44e2-9166-634432100000', '24c730dd-3a7a-48dd-9f4f-b849fa160000', 'Personal', 'alice@example.com'),
('d17ce431-7d9b-44dd-a688-8fc3a5220000', '91fc2491-8ed2-45ab-b793-cc2a06d80000', 'Work', 'bob@example.com');

-- Insert into socials table
INSERT INTO socials (id, contact_id, label, social)
VALUES
('e2e7a03a-5f4a-4c1f-a8cc-45d133160000', '24c730dd-3a7a-48dd-9f4f-b849fa160000', 'Twitter', '@alice'),
('fde0b849-931b-421c-bf76-69b2e5800000', '91fc2491-8ed2-45ab-b793-cc2a06d80000', 'LinkedIn', '/in/bob');

