"""Service types offered by the operator, used across pricing and booking."""

from enum import Enum


class ServiceType(str, Enum):
    EXCURSION = "excursion"
    RENT = "rent"
    TAXI = "taxi"

