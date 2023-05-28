// function react tsx
import { testFunc } from '../utils/util'

export default function TestA() {

    return (
        <div>
            <h1>TestA</h1>
            <button
                onClick={() => {
                    console.log('TestA button clicked')
                }}
            >Click Test A
            </button>
            <button onClick={testFunc}>Test Func From Utils</button>
        </div>
    )
}
