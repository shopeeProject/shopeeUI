class StateLoader {

    loadState() {
        try {
            let serializedState = localStorage.getItem("http://shopee123.com:state");

            if (serializedState === null) {
                return this.initializeState();
            }
            console.log(JSON.parse(serializedState))
            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("http://shopee123.com:state", serializedState);

        }
        catch (err) {
        }
    }

    initializeState() {
        return {
              //state object

            }
        };
    }

export default StateLoader;
