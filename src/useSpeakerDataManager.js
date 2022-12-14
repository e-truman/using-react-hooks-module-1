import speakersReducer from './speakersReducer';
import axios from 'axios';
import { useEffect, useReducer, useContext } from 'react';

import { InitialSpeakersDataContext } from '../pages/speakers';

const useSpeakerDataManager = () => {
    const initialSpeakersData = useContext(InitialSpeakersDataContext);
    // const [speakerList, setSpeakerList] = useState([]); // use reducer below accomplishes the same thing as this
    const [
        {
            isLoading,
            speakerList,
            favoriteClickCount,
            hasErrored,
            error,
            imageRerenderIdentifier,
        },
        dispatch,
    ] = useReducer(speakersReducer, {
        isLoading: false,
        speakerList: initialSpeakersData,
        favoriteClickCount: 0,
        hasErrored: false,
        error: null,
        imageRerenderIdentifier: 0,
        // isLoading: false,// no loading when you use server side rendering and useContext to initialize the array
        // speakerList: initialSpeakersData, // use this for incremental static regeneration
    });


    function forceImageRerender() {
        dispatch({ type: 'forceImageRerender' });
    }


    // first parameter is reducer function, second parameter is what ti initialize oor state to
    // const isLoading = stateObject.isLoading
    // const speakerList = stateObject.speakerList // dereferencing the object in the state in reducer is the same as doing this

    // const [isLoading, setIsLoading] = useState(true); // after refactoring, get this from useReducer

    // when use dispatch keyword, speakersReducer is called. changed to dispatch from setSpeakerList

    const incrementFavoriteClickCount = () => {
        dispatch({ type: 'incrementFavoriteClickCount' })
    }

    const toggleSpeakerFavorite = (speakerRecord) => {
        const updateData = async function () {
            axios.put(`/api/speakers/${speakerRecord.id}`, { ...speakerRecord, favorite: !speakerRecord.favorite })
            speakerRecord.favorite === true ?
                dispatch({ type: "unfavorite", id: speakerRecord.id }) :
                dispatch({ type: "favorite", id: speakerRecord.id })
        };
        updateData();
    }


    useEffect(() => {
        // setIsLoading(true); // makes sure loading status set to true // can remove from code after including isLoading state with reducer
        // new Promise(function (resolve) {
        //     setTimeout(function () {
        //         resolve();
        //     }, 1000); // reates one second delay, returns a promise
        // }).then(() => {
        //     // setIsLoading(false)
        //     // const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => { // use reducer filters now
        //     //     return (speakingSaturday && sat) || (speakingSunday && sun);
        //     // });
        //     // setSpeakerList(speakerListServerFilter); // after loads, sets speaker list to speaker data
        //     // setIsLoading(false); // sets loading to false

        //     dispatch({
        //         type: "setSpeakerList",
        //         data: SpeakerData
        //     })
        // });

        // don't need our timer if using axios
        const fetchData = async function () { // modifying our hook to get data from REST service
            try {
                let result = await axios.get('/api/speakers');
                dispatch({ type: 'setSpeakerList', data: result.data });
            } catch (e) {
                dispatch({ type: 'errored', error: e });
            }
        };
        fetchData();
        return () => {
            console.log('cleanup'); // cleanup function would go here, we don't need that
        };
    }, []); // only runs once
    // return { isLoading, speakerList, dispatch };
    return {
        isLoading,
        speakerList,
        favoriteClickCount,
        incrementFavoriteClickCount,
        toggleSpeakerFavorite,
        hasErrored,
        error,
        forceImageRerender,
        imageRerenderIdentifier,
    }; // handled dispatch in toggleSpeakerFavorite function to make code easier to read. hard to understand what dispatch means
}

export default useSpeakerDataManager

// npm install axios
// server side rendering good fro SEO because crawlers guaranteed to see all crawlers on your page
// loads faster becasue user doesn't have to wait for use effect to run to see data
// possibility of overloading server is downside