//I used the pop function to get the extension of the declared file.
//The pop function return the last item of an array with the specification of a delimiter.

const fileName = "cartracker.py";
console.log(fileName.split('.').pop());

const myapp = 'widgets.java';
console.log(myapp.split('.').pop());