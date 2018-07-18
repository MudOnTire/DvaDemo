import dva from 'dva';
import './index.css';
import Products from './models/products';
import router from './router';

// 1. Initialize
const app = dva({
    initialState: {
        products: [
            { name: 'dva', id: 1 },
            { name: 'antd', id: 2 }
        ]
    }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(Products);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
