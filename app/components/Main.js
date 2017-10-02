// Include React
var React = require("react");

// Here we include all of the sub-components
var Story = require("./Story");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this story state variable
  getInitialState: function() {
    return { story: [], heartsMain: 0};
  },


  // The moment the page renders get the Stories
  componentDidMount: function() {
    // Get the latest stories.
    console.log("in didmount");
    helpers.getStories().then(function(response) {
      console.log("response = ", response.data);
      if (response !== this.state.story) {
        console.log("story", response.data);
        this.setState({ story: response.data });
      }
    }.bind(this));
  },

  // If the component changes (i.e. if the heart or flag counters are updated)...
  componentDidUpdate: function(prevProps, prevState) {

    if (this.state.heartsMain !== prevState.heartsMain) {
    // Get the latest stories.
    console.log("in didmount");
    helpers.getStories().then(function(response) {
      console.log("response = ", response.data);
      if (response !== this.state.story) {
        console.log("story", response.data);
        this.setState({ story: response.data });
      }
    }.bind(this));
}

    // // Run the query for the address
    // helpers.runQuery(this.state.searchTerm).then(function(data) {
    //   if (data !== this.state.results) {
    //     console.log("Address", data);
    //     this.setState({ results: data });

    //     // After we've received the result... then post the search term to our story.
    //     helpers.poststory(this.state.searchTerm).then(function() {
    //       console.log("Updated!");

    //       // After we've done the post... then get the updated story
    //       helpers.getstory().then(function(response) {
    //         console.log("Current story", response.data);

    //         console.log("story", response.data);

    //         this.setState({ story: response.data });

    //       }.bind(this));
    //     }.bind(this));
    //   }
    // }.bind(this));
  },

  // This function allows childrens to update the parent. To re-render after heart of flag counter is clicked
  setTerm: function(hearts) {
    console.log("in set term");
    this.setState({heartsMain: hearts});
  },


  // Here we render the function
  render: function() {
    return (
        
        <Story story={this.state.story} setTerm={this.setTerm} />
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
