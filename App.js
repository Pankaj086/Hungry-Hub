// let heading = React.createElement("h1",{id:"heading" , xyz:"abc"},"hello world from react");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// console.log(heading); //object 


// nested div
/*
    <div> //Parent
        <div> //Child
            <h1>
                Pankaj
            </h1>
        </div>
    </div>
*/

// const parent = React.createElement('div',{id:"parent-div"}, 
//     React.createElement('div', {id:'child-div'}, React.createElement('h1', {id:'heading-div'} ,"Pankajj")));

// root.render(parent);

/*
    <div> //Parent
        <div> //Child
            <h1>
                Pankaj
            </h1>

            <h2>
                CSEDEP
            </h2>
        </div>
    </div>
*/

const parent = React.createElement('div',{id:"parent-div"},
    [ 
        React.createElement('div', {id:'child-div'},
            [ React.createElement('h1', {id:'heading-div1'} ,"Pankajj"), 
            React.createElement('h2', {id:'heading-div2'} ,"CSEDEP")]
        ),

        React.createElement('div', {id:'child-div'},
            [ React.createElement('h1', {id:'heading-div1'} ,"Pankajj"), 
            React.createElement('h2', {id:'heading-div2'} ,"CSEDEP")]
        )
    ]
    );

root.render(parent);