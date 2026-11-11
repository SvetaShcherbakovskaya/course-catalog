function AvailabilityBadge({ isAvailable }) {
    return (
        <span
            className={`badge ${
                isAvailable ? "badge--available" : "badge--closed"
            }`}
        >
      {isAvailable ? "Доступен" : "Набор закрыт"}
    </span>
    );
}

export default AvailabilityBadge;