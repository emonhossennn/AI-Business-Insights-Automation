export const fetchInsight = async (data) => {
    const response = await fetch(`http://localhost:8000/insight/?data=${data}`);
    const result = await response.json();
    return result.insight;
}
