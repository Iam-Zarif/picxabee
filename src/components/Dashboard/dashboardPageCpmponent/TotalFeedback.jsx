import React from 'react';
import useSWR from 'swr';

const TotalFeedback = () => {
    // const feedbackFetcher = (...args) => fetch(...args).then((res) => res.json());
	// 	const {
	// 		data: feedbacks,
	// 	} = useSWR('/api/feedbacks', postFetcher, {
	// 		refreshInterval: 1000,
	// 	});
    return (
        <div>
            <p>{feedbacks.length}</p>
        </div>
    );
};

export default TotalFeedback;