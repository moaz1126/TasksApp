import styles from '../styles/manageTasks.module.css';

type ManageTasksProps = {
    activeCount: number;
    onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
    onClearCompleted: () => void;
    currentFilter: 'all' | 'active' | 'completed';
}

export default function ManageTasks({ 
    activeCount, 
    onFilterChange, 
    onClearCompleted,
    currentFilter 
}: ManageTasksProps) {
    return (
        <div className={styles.container}>
            <span className={styles.count}>{activeCount} items left</span>
            
            <div className={styles.filters}>
                <button 
                    className={`${styles.filterButton} ${currentFilter === 'all' ? styles.active : ''}`}
                    onClick={() => onFilterChange('all')}
                >
                    All
                </button>
                <button 
                    className={`${styles.filterButton} ${currentFilter === 'active' ? styles.active : ''}`}
                    onClick={() => onFilterChange('active')}
                >
                    Active
                </button>
                <button 
                    className={`${styles.filterButton} ${currentFilter === 'completed' ? styles.active : ''}`}
                    onClick={() => onFilterChange('completed')}
                >
                    Completed
                </button>
            </div>

            <button 
                className={styles.clearButton}
                onClick={onClearCompleted}
            >
                Clear Completed
            </button>
        </div>
    );
}
