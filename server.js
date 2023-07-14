        // Use express as HTTP middleware
        // Feel free to use your own
        var express = require('express')
                var app = express()

        // Initialize Prometheus exporter
                const prom = require('prom-client')
                const prom_gc = require('prometheus-gc-stats')
                prom_gc()

        // Sample HTTP route
                app.get('/', function (req, res) {
                res.send('Hello World!')
                })

        // Export Prometheus metrics from /metrics endpoint
                app.get('/metrics', function(req, res) {
                res.end(prom.register.metrics());
                });

                app.listen(3000, function () {
                console.log('Example app listening on port 3000!')
                })
