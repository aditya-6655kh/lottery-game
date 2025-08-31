export default function Rules(){
    return(
        <div className="mb-6 text-left max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-2">Game Rules</h2>
            <ul className="list-disc list-inside">
                <li>You will be given a starting amount of money.</li>
                <li>A random number will be generated.</li>
                <li>If the sum of digits of the random number is even, you win!</li>
                <li>If you win, your prize will be doubled!</li>
                <li>If you lose, you lose all your money!</li>
                <li>Good luck!</li>
            </ul>
        </div>
    )
}