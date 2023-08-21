-- Create the Account table
CREATE TABLE accounts (
	id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	first_name     VARCHAR(255),
	last_name      VARCHAR(255),
	email          VARCHAR(255) UNIQUE,
	email_verified TIMESTAMPTZ
);

-- Create the ContactGroup table
CREATE TABLE contact_groups (
	account_id       UUID, 
	id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	group_name       VARCHAR(255),
	contact_frequency BIGINT,
	color            VARCHAR(255),
	FOREIGN KEY (account_id) REFERENCES accounts(id)
);


-- Create the Contact table
CREATE TABLE contacts (
	account_id        UUID,
	id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	first_name        VARCHAR(255),
	last_name         VARCHAR(255),
	last_contacted    TIMESTAMP,
	active            BOOLEAN DEFAULT true,
	created_at        TIMESTAMP DEFAULT now(),
	updated_at        TIMESTAMP DEFAULT now(),
	contact_group_id  UUID,
	is_favorite       BOOLEAN DEFAULT false,
	profile_url       VARCHAR(255),
	birthday          DATE,
	company_department VARCHAR(255),
	company_name      VARCHAR(255),
	company_title     VARCHAR(255),
	maiden_name       VARCHAR(255),
	middle_name       VARCHAR(255),
	nick_name         VARCHAR(255),
	notes             TEXT,
	prefix            VARCHAR(255),
	suffix            VARCHAR(255),
	FOREIGN KEY (contact_group_id) REFERENCES contact_groups(id)
);

-- Create the Address table
CREATE TABLE addresses (
	id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	contact_id  UUID,
	label      VARCHAR(255),
	street1    VARCHAR(255),
	street2    VARCHAR(255),
	city       VARCHAR(255),
	province   VARCHAR(255),
	postal_code VARCHAR(255),
	country    VARCHAR(255),
	FOREIGN KEY (contact_id) REFERENCES contacts(id)
);

-- Create the PhoneNumber table
CREATE TABLE phone_numbers (
	id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	contact_id UUID,
	label     VARCHAR(255),
	phone     VARCHAR(255),
	FOREIGN KEY (contact_id) REFERENCES contacts(id)
);

-- Create the Email table
CREATE TABLE emails (
	id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	contact_id UUID,
	label     VARCHAR(255),
	email     VARCHAR(255),
	FOREIGN KEY (contact_id) REFERENCES contacts(id)
);

-- Create the Social table
CREATE TABLE socials (
	id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	contact_id UUID,
	label     VARCHAR(255),
	social    VARCHAR(255),
	FOREIGN KEY (contact_id) REFERENCES contacts(id)
);

