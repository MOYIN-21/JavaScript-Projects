
    function Native(_firstName, _lastName, _scvID, _cohort) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        let scvID = _scvID;
        this.cohort = _cohort;

        this.setScvID = (scvID) => {
            scvID = scvID;
        };
        this.getScvID = () => {
            return scvID;
        }
    };
    Native.prototype.hasLapTop = true;

let student1 = new Native("Moyin", "Ola", "00321tr", 23);
console.log(student1.getScvID())

module.exports = Native