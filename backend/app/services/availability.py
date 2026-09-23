"""Availability logic: which time ranges are free to book."""

from datetime import datetime


def overlaps(start_a: datetime, end_a: datetime,
             start_b: datetime, end_b: datetime) -> bool:
    """True if two half-open intervals [start, end) intersect."""
    if start_a >= end_a or start_b >= end_b:
        raise ValueError("each interval must start before it ends")
    return start_a < end_b and start_b < end_a


def is_free(start: datetime, end: datetime, blocked: list[tuple[datetime, datetime]]) -> bool:
    """True if [start, end) overlaps none of the blocked intervals."""
    return not any(overlaps(start, end, b_start, b_end) for b_start, b_end in blocked)
