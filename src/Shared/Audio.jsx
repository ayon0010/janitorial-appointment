
const AudioPlayer = ({ src, name }) => {
    return (
        <div className="card w-96 bg-[#3F00E7] shadow-xl p-4">
            <h2 className="text-lg font-bold mb-4 text-center text-white">🎵 {name} Call Recording</h2>
            <audio controls className="w-full">
                <source src={src} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioPlayer;
