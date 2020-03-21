function transformDate(date) {
    let d = new Date(date);

    return d.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long'
        }) + ', ' +
        d.toLocaleDateString('ru-RU', {
            year: 'numeric'
        }).replace(/\s*г\./, '');
}

export {
    transformDate
};
