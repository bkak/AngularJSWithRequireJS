var express = require("express"),
    app     = express(),
    port    = parseInt(process.env.PORT, 10) || 8080;

app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/app'));
    app.use(app.router);
});
var sales = [{Customer:"A1",Number:1,Id:1},{Customer:"B1",Number:2,Id:2}];
app.get('/sales', function(req, res){
    res.send(sales);
});


app.get('/sales/:Id', function(req, res){
    var val ={};
    if(req.params.Id==1)
    {
        val= { Id : 1,Number : 1, Date :null, TotalAmount :100, Customer:"ABC"};
    }
    else if(req.params.Id==2)
    {
        val= { Id : 2,Number : 2, Date :null, TotalAmount :300, Customer:"PQRD"};
    }
    else if(req.params.Id ==0)
    {
        val ={};
    }
    res.send(val);00
});
app.post('/sales', function(req, res){
    if(sales ){
    sales.push({ Customer : req.params.Customer,
                 Number: req.params.Number,
                 Id : req.params.Id,
                 TotalAmount: req.params.TotalAmount
                  });
    }
    res.send('success');
});

app.listen(port);
console.log('Now serving the app at http://localhost:' + port + '/');
