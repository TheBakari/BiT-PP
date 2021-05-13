// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

// (function(){
//     function createCoffee(params){
        
//     }
//     var coffee1={};
//     var coffee2={};
// })();   


(function(){
    // var project={
    //     description: 'This is a project dedicated to solve the issue of creating a multiple object of the same kind',
    //     programingLanguage: 'JavaScript',
    //     gitRepo: 'https://github/programer/first-project',
    //     status: true,

    // };
    function createProject(description,programingLanguage,gitRepo,status){
        var obj= {
            description: description,
            programingLanguage: programingLanguage,
            gitRepo: gitRepo,
            developmentStatus: status,
            printRepo:function(){
                return obj.gitRepo;
            }
        };
        return obj;
    }   
    var project1 = createProject('This is a project dedicated to solve the issue of creating a multiple object of the same kind','JavaScript', 'https://github/programer/first-project', true);
    var project2= createProject("new project", "php", "",false)
    console.log(project2)
    
})();   