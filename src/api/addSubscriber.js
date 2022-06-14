const addNewSubscriber = async (emailId) => {
    const myNewObject = new Parse.Object('subcribers');
    myNewObject.set('email', emailId);
    try {
      const result = await myNewObject.save();
      // Access the Parse Object attributes using the .GET method
      console.log('subcribers created', result);
    } catch (error) {
      console.error('Error while creating subcribers: ', error);
    }
  };

module.exports = addNewSubscriber