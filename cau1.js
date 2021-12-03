let a = 5;
let b = 8;

function linear_equation(a, b)
{
    if (a == 0 && b == 0){
        console.log('The equation has infinitely many solutions');
        
    }


    else if (a == 0 && b != 0){
        console.log("the equation has no solution");
    }
    
    else {
        console.log('The solution of the equation is x = ' + (-b/a));
    }
}