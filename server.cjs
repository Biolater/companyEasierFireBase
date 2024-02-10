const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 3001;
const secretKey = process.env.SECRET_KEY || '0773525543Am'; // Use environment variable for secret key

app.use(cors());
app.use(helmet()); // Use helmet for security headers
app.use(bodyParser.json());

const users = [];

const authenticateUser = (req, res, next) => {
    const publicRoutes = ['/api/signUp', '/api/login'];
    const authHeader = req.header('Authorization');

    if (publicRoutes.includes(req.path)) {
        return next();
    }

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized - Missing or Invalid token' });
    }

    const token = authHeader.substring(7); // Remove "Bearer " prefix

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = users.find(user => user.id === decoded.id);

        if (!req.user) {
            return res.status(401).json({ error: 'Unauthorized - User not found' });
        }

        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
};

app.post('/api/signUp', async (req, res) => {
    const { email, password } = req.body;

    if (users.find(user => user.email === email)) {
        return res.status(400).json({ error: 'User already exists' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = { id: users.length + 1, email, password: hashedPassword };
        users.push(newUser);

        const token = jwt.sign({ id: newUser.id, email: newUser.email }, secretKey, { expiresIn: '1h' });
        res.json({ user: newUser, token });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);

    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    try {
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
            res.json({ user, token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/user', authenticateUser, (req, res) => {
    res.json({ user: req.user });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
