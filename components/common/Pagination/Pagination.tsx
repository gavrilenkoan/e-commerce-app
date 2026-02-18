export const Pagination = ({ 
    page, 
    totalPages, 
    onPageChange 
}: { 
    page: number, 
    totalPages: number, 
    onPageChange: (page: number) => void
}) => {
    return (
        <div>
            <button
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
            >
                &lt;
            </button>

            {page > 2 && (
                <>
                    <button onClick={() => onPageChange(1)}>1</button>
                    {page > 3 && <span>...</span>}
                </>
            )}

            {page > 1 && (
                <button onClick={() => onPageChange(page - 1)}>
                    {page - 1}
                </button>
            )}

            <button>
                {page}
            </button>

            {page < totalPages && (
                <button onClick={() => onPageChange(page + 1)}>
                    {page + 1}
                </button>
            )}

            {page < totalPages - 1 && (
                <>
                    {page < totalPages - 2 && <span>...</span>}
                    <button onClick={() => onPageChange(totalPages)}>
                        {totalPages}
                    </button>
                </>
            )}

            <button
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages}
            >
                &gt;
            </button>
        </div>
    )
}