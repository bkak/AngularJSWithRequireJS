define([], function()
{
    return function(dependencies)
    {
        var definition =
        {
            resolver: ['$q','$rootScope', function($q, $rootScope)
            {
                var deferred = $q.defer();

                require(dependencies, function()
                {
                    $rootScope.$apply(function()
                    {
                        deferred.resolve();
                    });
                });

                return deferred.promise;
            }]
        }

        return definition;
    }
});
/*define([], function()
{
    return  function(dependencies, resolve1,$q, $rootScope)
    {
        var definition = function($q, $rootScope)
        {
            var deferred = $q.defer();

            require(dependencies, function()
            {
                $rootScope.$apply(function()
                {
                    deferred.resolve();
                });
            });

            return deferred.promise;
        };
        //return definition;
        var returnableResolve = {
            resolver: ['$q', '$rootScope', function($q,$rootScope){
               // definition.$inject = ['$q', '$rootScope'];
                $q.when(definition($q,$rootScope)).then(function(){
                    //var sales= function(getAllSales) {
                    //    return getAllSales();
                    //}
                    return resolve1;
                });
            }]
        }
        return returnableResolve;
    };
}); */