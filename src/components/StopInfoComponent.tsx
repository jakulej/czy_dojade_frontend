import "../styles/StopInfoComponent.css"

export default function StopInfoComponent() {
    return (
        <div>
            <div className={'stop-item'}>
                <p className={'stop-text'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="#0055D4"
                         className="bi bi-record-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                    Stop 1
                </p>
            </div>
            <div className={'stop-list-divider'}></div>
        </div>
    );
}