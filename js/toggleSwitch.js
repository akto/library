/* Basically an on-and-off switch */
const toggleSwitch = {
    isOn : false,
    toggle : function(){this.isOn = !this.isOn}
}

toggleSwitch.isOn; // returns false
toggleSwitch.toggle(); //void change on value from assigned value to contrary value
toggleSwitch.isOn; // returns true
