// Exercise No 2
let personName: string = "ERIC";
console.log(
  `hellow ${personName} , would you like to learn some python today?`
);

// Exercise No 3

// lower case
let personName: string = "Farooq";
console.log("lowercase:", personName.toLowerCase());

// Upper Case
console.log("uppercase:", personName.toLocaleUpperCase());

// title case
console.log(
  "titlecase:",
  personName.replace(/\bw/g, (c) => c.toUpperCase())
);

// Exercise No 4

let personName: string = ``;
personName = prompt(`What Is Your Name?`) || ``;
let lowercase: string = personName.toLowerCase();
let uppercase: string = personName.toUpperCase();
let titlecase: string = personName
  .split(``)
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(``);
if (personName !== null && personName !== ``) {
  alert(`Hello ${personName}, here are your name in:
    LowerCase: ${lowercase}
    UpperCase: ${uppercase}
    Titlecase: ${titlecase}`);
} else {
  alert(`please fill your name !`);
}

// Excercise No 5

let quote: string =
  "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstien";
console.log(`${author} once said, "${quote}"`);

//Excercise No 6

let qoute: string =
  "A person who never made a mistake never tried anything new.";
let famous_person: string = "Albert Einstien";
let message: string = `${famous_person} once said,"${qoute}"`;
console.log(message);

//Excercise No 7

let personName: string=`\t\n   Jhon Doe  \n\t`;
console.log("original:",   personName);
console.log("stripped:",  personName.trim());

//Excercise No 8

console.log(5 + 3);
console.log(11 - 3);
console.log(4  *2);
console.log(16 / 2);

//Excercise No 9

let favoriteNumber :number = 17;
console.log(`My favorite number is ${favoriteNumber} `);

//Excercise No 10

//exercise 10
//my name is Farooq
//Date:17/02/2024
//this programe run simple code just like hellow world
console.log(`hello world simple programe`);

//exercise 10
//my name is Farooq
//Date:17/02/2024
//this programe doing multiplication
console.log(5 * 2);

//Excercise No 11

let members:  string[]=[`farooq`,`izhan`,`fawwad`];
for (let i=0; i<members.length; i++){
    console.log(members[i]);
};

//Excercise No 12

let members: string[]=[`farooq`,`fawwad`,`asad`,`ebad`,`izhan`];
let message: string=' how to learn typescript:';
for (let i=0; i<members.length; i++) {
     console.log(message + members[i]);
};

//Excercise No 13

let transportation: string []=[`civic`,`bike`,`bus`,`suzuki`];
for (let i=0; i<transportation.length; i++){
    console.log("I would like to own a  " +transportation[i]);

};

//Excercise No 14

let guest_list: string[]=[`izhan`,`ebad`,`ayesha`,`farooq`,`fawwad`];
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear sir/madam `+ guest_list[i] +`,\n  we invited you on dinner tomorrow.\n\nThank You`)
}
export{guest_list};

//Excercise No 15

let guest_list : string[]=[` Izhan`,` Fawwad`,` Farooq`,` Ebad`];
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear Sir/Madam   ` +guest_list[i] +`,\n we are invited you on dinner tomorrow.\nThank You!\
    n`);
}
let not_present: string=`Izhan`;
let new_guest: string =` Kohli`;
guest_list[0]=new_guest;
for(let i=0; i<guest_list.length; i++){ 
console.log(`Dear Sir/Madam`+ guest_list[i] +`\nwe are invited you on dinner tomorrow.\nThank You\n`);
};
console.log(`Mr.${not_present} will not comming on tomorrow dinner.`);

//Excercise No 16

let guest_list : string[]=[` Izhan`,` Fawwad`,` Farooq`,` Ebad`];
/*for(let i=0; i<guest_list.length; i++){
    console.log(`Dear Sir/Madam   ` +guest_list[i] +`,\n we  invited you on dinner tomorrow.\nThank You!\
    n`); 
};*/

let not_present: string=`Izhan`;
let new_guest: string =` Kohli`;
guest_list[0]=new_guest;
for(let i=0; i<guest_list.length; i++){ 
console.log(`Dear Sir/Madam`+ guest_list[i] +`\nwe invited you on dinner tomorrow.\nThank You\n`);
};
console.log(`Mr.${not_present} will not comming on tomorrow dinner.`)


guest_list.unshift(`rohit`,`siraj`,`gill`);{
    for (let i=0; i<guest_list.length; i++)
console.log(`Dear Sir/Madam  ` + guest_list [i] + `\nwe invited you on dinner tomorrow.Bcz we found a bigger dinner table,so we dicided to invite three more guest.\nThank You\n`)};

//Excercise No 17

let guest_list : string[]=[` Izhan`,` Fawwad`,` Farooq`,` Ebad`];
/*for(let i=0; i<guest_list.length; i++){
    console.log(`Dear Sir/Madam   ` +guest_list[i] +`,\n we  invited you on dinner tomorrow.\nThank You!\
    n`); 
};*/

let not_present: string=`Izhan`;
let new_guest: string =` Kohli`;
guest_list[0]=new_guest;
/*for(let i=0; i<guest_list.length; i++){ 
console.log(`Dear Sir/Madam`+ guest_list[i] +`\nwe invited you on dinner tomorrow.\nThank You\n`);
};
console.log(`Mr.${not_present} will not comming on tomorrow dinner.`)*/


guest_list.unshift(`rohit`,`siraj`,` gill`);
/*{
   for (let i=0; i<guest_list.length; i++)
console.log(`Dear Sir/Madam  ` + guest_list [i] + `\nwe invited you on dinner tomorrow.Bcz we found a bigger dinner table,so we dicided to invite three more guest.\nThank You\n`)
}*/

console.log(`\nunfortunatly we can't arrange big table,so we invite just two more people.`);
while(guest_list.length>2){
    let remove_guest=guest_list.pop();
    console.log(`Sorry Sir/Madam.  ${remove_guest} you are not invited for dinner.`);

}

   for (let i=0; i<guest_list.length; i++)
{console.log(`Dear Sir/Madam  ` + guest_list [i] + `,\nYes you are still invited on tomorrow dinner.\nThank You\n`)
}
guest_list.splice(0,2)
console.log(guest_list);


//Excercise No 18

let places : string[]=[`captown`,`islamabad`,`sharjah`,`dubai`,`qatar`];
console.log(`original `+places);
console.log(`copy `+ [...places] .sort());
console.log(`original `+places);
console.log(`copy `+[...places].sort().reverse());
console.log(`copy `+[...places].sort().reverse());
console.log(`original `+places.sort());
console.log(`original `+places.sort().reverse());

//Excercise No 19

//import{ guest_list } from '../question 14/main'
console.log(`,\n PRINTING NUMBER OF GUEST INVITED` )
console.log(`we had finally invited ${guest_list.length} from exercise 14`)

//Excercise No 20

let language: string[]=[`English`,`Urdu`,`Arabic`,`Russian`,`korean`];
console.log("List Of languages");
for (let top of language){
    console.log(top)
};

//Excercise No 21

interface item{
    name:string
    price:number
}
// create two object using interface
const book : item={
name :`ESSENTIAL TYPESCRIPT`
price:`450`
}
const apple:item={
    name:`apple`
    price:200
}
console.log(`book name:${book.name} price: $${book.price}`)
console.log(`apple name: ${apple.name} price $${apple.price}`);


//Excercise No 22

let array: (string| number)[]=[`farooq`,`ebad`,3,5,8,`ayesha`]
console.log(array[5]);
console.log(array[4]);
console.log(array[3]);
console.log(array[2]);
console.log(array[1]);

//Excercise No 23

// creating car variable
let car : string=`Subaru`;
console.log("Is car == 'Subaru'? I predict true.");
console.log(car =='Subaru')
//test no 2
console.log("Is car !== 'honda' I predict true");
console.log(car !== "honda");
//test no 3
console.log("Is car !== 'ford' I predict true");
console.log(car !== 'ford');


//Excercise No 24

// Equality & Inequality test 1
console.log("Equality test with :string","Apple"==="Apple");
// Equality & Inequality test 2
console.log("InEquality test with :string",("Apple" as string)  != "Orange");
// test using the lower case function 
console.log("Equality test with :lowercase","HELLO".toLowerCase()==="hello");
// numerical test involving equality & inequality 
console.log("Equality test with :number",26===26);
console.log("Equality test with :number",(26 as number)===35);
// greater than & less than 
console.log("greater than  test with :num",5>4); 
console.log("greater than  test with :num",5>=5); 
console.log("Equality test with :string",3<4);
console.log("greater than  test with :num",3<=3); 
//test using && or||
console.log("test using &&",55==55 && 10>=10)
console.log("test using or || ",26===26 || 5>6);



//Excercise No 25

let alien_color : string="green";
if(alien_color ===`green`){
    console.log(`player just earned 5 point`) 
}
alien_color=`yellow`;

if(alien_color ===`green`){
    console.log(`player just earned 5 point`) 
};
alien_color=`red`;
if(alien_color===`green`){
    console.log(`player just earned 5 point!`)
};


//Excercise No 26

let alienColor :string='green';
if(alienColor===`green`){
    console.log("player just earned 5 point for shooting the alien");
}else{
    console.log('player just earned 10 points');
}
 alienColor ='yellow';
if(alienColor===`green`){
    console.log("player just earned 5 point for shooting the alien");
}else{
    console.log('player just earned 10 points');
};



//Excercise No 27

let alienColor :string="green";
if(alienColor==='green'){
    console.log('Player just earned 5 point')
}else if(alienColor===`yellow`){  
    console.log(`Player earned 10 points`);
}else if(alienColor===`red`){
    console.log(`Player just earnede 15 point`);
}else{
    console.log(`please select right color`)
};

alienColor=`yellow`;
if(alienColor==='green'){
    console.log('Player just earned 5 point')
}else if(alienColor===`yellow`){  
    console.log(`Player earned 10 points`);
}else if(alienColor===`red`){
    console.log(`Player just earnede 15 point`);
}else{
    console.log(`please select right color`)
};

alienColor=`red`;
if(alienColor==='green'){
    console.log('Player just earned 5 point')
}else if(alienColor===`yellow`){  
    console.log(`Player earned 10 points`);
}else if(alienColor===`red`){
    console.log(`Player just earnede 15 point`);
}else{
    console.log(`please select right color`)
};


//Excercise No 28

let age: number =25;
if(age<25){
    console.log(`Person Is A Baby!`)
}else if(age>=2 && age<4)
{
console.log(`The Person Is A Toddler!`)
}else if(age>=4 && age<13){
    console.log(`Person Is A Kid!`)
}else if(age>=13 && age<20){
    console.log(`The Person Is A Teenager`)
}else if(age>=20 && age<65){
    console.log(`A Person Is An Adult`)
}else{
    console.log(`A Person Is An Elder`)
};


//Excercise No 29

let favorite_fruits: string[]=[`apple`,`banana`,`mango`];
if(favorite_fruits.includes(`apple`)){
    console.log(`I Really Like apple!`)
};
if(favorite_fruits.includes(`mango`)){
    console.log(`I Really Like mango!`)
};
if(favorite_fruits.includes(`banana`)){
    console.log(`I Really Like Banana!`)
};
if(favorite_fruits.includes(`strawberries`)){
    console.log(`I Really Like strawberries!`)
};

//Excercise No 30

const userName:string[]=[`admin`,`fawwad`,`izhan`,`ebad`,`hasan`];
/*for(let i=0;i<userName.length;i++){
    if(userName[i] ===`admin`){
        console.log(`Hello Admin, Would You Like To See a Status Report?`);
    }else{console.log(`Hello${userName[i]} , thank you for logging in again`)};
};*/
userName.forEach(userName => {
    if(userName===`admin`){
        console.log('Hello Admin, Would You Like To See a Status Report')
    }
    else{
        console.log(`Hello ${userName},thank you for logging in again`)
    }
});


//Excercise No 31

let userName:string[]=[`admin`,`harry`,`brook`,`hales`,`morgan`];
if(userName.length===0){
    console.log(`Wee Need To Find Some Users!`)
}else{
    userName=[];
    console.log(`All User Name Have Been Remove. `+userName.length)
};


//Excercise No 32

let current_users:string[]=[`Ali`,`Fawwad`,`hasan`,`izhan`,`ebad`,`babar`];
let new_users:string[]=[`Ali`,`Fawwad`,`hasan`,`amir`,`ebad`];
new_users.forEach(new_users =>{ 
    let lowercase:string=new_users.toLowerCase();
    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`The User Name ${new_users} is not available. Please write a different username.`)
    }else{
        console.log(`The user name ${new_users} is available`);
    }

});


//Excercise No 33

let numbers: number[]=[1,2,3,4,5,6,7,8,9];
for(let num of numbers){
    let ordinalEnding:string;
    if(num===1){
        ordinalEnding="st"
    }else if(num===2){
        ordinalEnding="nd"
    }else if(num===3){
        ordinalEnding="rd"
    }else {
        ordinalEnding="th"
    }
console.log(`${num}${ordinalEnding}`)    
};

//Excercise No 34

let favorite_pizza:string[]=[`Pepperoni`,`Cuban`,`Chicken Tikka`];
for(let pizza of favorite_pizza){
    console.log(`I Like ${pizza} pizza`)
};
console.log(`I Really Love Pizza!`);


//Excercise No 35

let animals:string[]=[`Dog`,`Cat`,`Rabbit`]
for(let animal of animals){
console.log(`A ${animal} would make a grat pet.`)
};


//Excercise No 36

function make_shirts(size:string,text:string){

    console.log(`Creating a ${size} shirt with the message:  ${text}`)
};
make_shirts(`large`,`this is large`);
make_shirts(`medium`,`this is medium`);
make_shirts(`small`,`this is large`);


//Excercise No 37

function make_shirts(size:String =`large` , text:string =`I Love TS. `){
    console.log(`Creating a ${size} with the message: ${text}`)
};
make_shirts();
make_shirts(`medium`,)
make_shirts(`small`,`I Love Python`);


//Excercise No 38

function describe_city(city:string ,country:string=`Default Country. `){
    console.log(`${city} is in ${country}`)
    };
    describe_city(`Karachi`,`Pakistan`);
    describe_city(`Tokyo`,`Japan`);
    describe_city(`Paris`);


//Excercise No 39

function city_country(city:string,country:string){
    return `${city} , ${country}`;
};
console.log(city_country(`Islamabad`,`Pakistan`));
console.log(city_country(`Tokyo`,`Japan`));
console.log(city_country(`Paris`,`London`));


//Excercise No 40

function make_album(artist: string, title: string, tracks?: number) {
    const album: { artist: string; title: string; tracks?: number } = {
      artist: artist,
      title: title,
    };
    if (tracks !== undefined) {
      album.tracks=tracks;
    }
    return album;
  }
  const album1 = make_album(`Artist1`,`Album title1`)
  console.log(album1)
  const album2 = make_album(`Artist2`,`Album title2`)
  console.log(album2)
  const album3 = make_album(`Artist3`,`Album title 3`,12)
  console.log(album3)


//Excercise No 41

let magician:string[]=[`Tom Riddle`,`wisely`,`Harry Potter`,`severus`];
function show_magician(name:string[]){
    name.forEach(names => {
        console.log(names)
    })
};
show_magician(magician);


//Excercise No 42

let magician:string[]=['herry potter','hermione granger','ron weasley','albus dumbledor'];
function copy_array(arr:string[]){
return [...arr]
}

function make_great(magicianarray:string[]){
    for(let i=0;i<magicianarray.length;i++){
    magicianarray[i]= "the great " +  magicianarray[i]
    }
}
function show_magician(magicians:string[]){
    magicians.forEach(element => {
        console.log(element)
    });
}
const copymagicianarray= copy_array(magician);
make_great(copymagicianarray);
console.log ("\n\nthis is my original array");
show_magician(magician);
console.log ("\n\nthis is my modified copy of an array");
show_magician(copymagicianarray);



//Excercise No 43

let magician2:string[]=['herry potter','hermione granger','ron weasley','albus dumbledor'];
function copy_array1(arr:string[]){
return [...arr]
}

function make_great2(magicianarray:string[]){
    for(let i=0;i<magicianarray.length;i++){
    magicianarray[i]= "the great " +  magicianarray[i]
    }
}
function show_magician2(magicians2:string[]){
    magicians2.forEach(element1 => {
        console.log(element1)
    });
}
const copymagicianarray1= copy_array1(magician2);
make_great2(copymagicianarray1);
console.log ("\n\nthis is my original array");
show_magician2(magician2);
console.log ("\n\nthis is my modified copy of an array");
show_magician2(copymagicianarray1);


//Excercise No 44

function makesandwich(item:string[]){
    console.log('making your sandwich with:\n');
    item.forEach(element => console.log("- "+ element));
    console.log("\nenjoy your sandwich\n")
}
makesandwich(['ham','cheese','lettuce']);
makesandwich(['turkey','bacon']);
makesandwich(['peanut butter','jelly']);


//Excercise No 45

function storecarinfo(manufacturer:string,modelName:string,...extraOptions:{[key:string]:any}[]):
 Object {
    const carinfo ={
manufacturer,
modelName,
...Object.assign({},...extraOptions)
 }
 return carinfo;
 }
let answer= storecarinfo('honda','civic',{color:'black'},{features:['navigation','power window']});
console.log (answer);

