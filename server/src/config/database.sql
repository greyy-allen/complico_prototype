-- Users table creation
CREATE TABLE IF NOT EXISTS Users (
    user_id    SERIAL PRIMARY KEY,
    username   VARCHAR(50) NOT NULL,
    email      VARCHAR(100) NOT NULL UNIQUE,
    password   VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Review table creation
CREATE TABLE IF NOT EXISTS Reviews (
    review_id     INT           GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id       INT           NOT NULL, 
    product_id    INT           NOT NULL,
    rating        INT           NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment       TEXT,
    created_at    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES Users (user_id)
);