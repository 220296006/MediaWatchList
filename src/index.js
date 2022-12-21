const { APP_BASE_HREF } = require('@angular/common');

const app = require('express')();

app.get('/', (req, res) =>
    res.json({message: 'Docker app running'})
);

const port = process.env.PORT || 4200;

app.listen(port, () => console.log('app listening on http://localhost:${port}'));


