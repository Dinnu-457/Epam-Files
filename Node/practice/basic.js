//Node modules which are there in the node software itself
//NPM -open source modules/packages
//hand crafting-created by us

const Curr_Time=require("./practice").Curr_Time;
function printMessage(str){
    console.log(`${Curr_Time}+${str}`);
}

//it is very important what u are exporting

module.exports=printMessage;