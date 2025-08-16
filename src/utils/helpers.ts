export const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleString('ko-KR');
};

export const formatDateShort = (date: string | Date) => {
    return new Date(date).toLocaleDateString('ko-KR');
};

export const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

export const formatNumber = (num: number) => {
    return num.toLocaleString('ko-KR');
};

export const getRoleDisplayName = (role: string) => {
    switch (role) {
        case 'USER':
            return '사용자';
        case 'CONTRIBUTOR':
            return '기여자';
        case 'ADMIN':
            return '관리자';
        default:
            return role;
    }
};

export const getStatusDisplayName = (status: string) => {
    switch (status) {
        case 'PENDING':
            return '대기중';
        case 'ACCEPT':
            return '승인됨';
        case 'TEMPORARY_ACCEPT':
            return '임시승인';
        case 'REJECT':
            return '거절됨';
        default:
            return status;
    }
};