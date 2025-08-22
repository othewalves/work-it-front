export const getFirstAndLastInitials = (name: string) => {
    const parts = name.trim().split(/\s+/);
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};