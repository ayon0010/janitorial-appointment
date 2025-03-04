'use client'
import { useState } from 'react';

const AudioPlayer = ({ src, name }) => {
    const [isAudioLoaded, setAudioLoaded] = useState(false);

    const handlePlayAudio = () => {
        setAudioLoaded(true); // Load the audio when user clicks play
    };

    return (
        <div className="card w-full bg-[#3F00E7] shadow-xl p-4">
            <h2 className="text-lg font-bold mb-4 text-center text-white">🎵 {name} Call Recording</h2>

            {!isAudioLoaded ? (
                <button
                    onClick={handlePlayAudio}
                    className="w-fit py-2 px-4 mx-auto bg-gray-1 text-deep-blue rounded-lg btn"
                >
                    Play Audio
                </button>
            ) : (
                <audio controls className="w-full">
                    <source src={src} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
};

export default AudioPlayer;
