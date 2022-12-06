#include <stdio.h>

int main() {
    int n,currentYear;
    printf("Nhap nam sinh: ");
    scanf("%d", &n);
    printf("Nhap nam hien tai: ");
    scanf("%d", &currentYear);
    printf("Tuoi cua ban la: %d", currentYear - n);
}