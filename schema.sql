DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS field CASCADE;
DROP TABLE IF EXISTS forums CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS comments CASCADE;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(255),
	password VARCHAR(255),
	home_location VARCHAR(255),
	profile_img TEXT
);

CREATE TABLE field (
	id SERIAL PRIMARY KEY,
	field VARCHAR(255),
	university VARCHAR(255),
	graduated VARCHAR(255),
	degrees VARCHAR(255),
	summary TEXT,
	user_id INTEGER REFERENCES users
);

CREATE TABLE forums (
	id SERIAL PRIMARY KEY,
	forum VARCHAR(255),
	description VARCHAR(255)
);

CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	topic VARCHAR(255),
	user_id INTEGER REFERENCES users,
	content TEXT,
	vote INTEGER,
	num_comments INTEGER,
	location VARCHAR(255),
	forum_id INTEGER REFERENCES forums
);

CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users,
	content TEXT,
	vote INTEGER,
	location VARCHAR(255),
	post_id INTEGER REFERENCES posts ON DELETE CASCADE
);