import os
import sys
from pathlib import Path
from common.Logging import ErrorLog, SuccessLog

C_COMPONENTS_DIR = Path("./src/")


def validate_component_tests(p_check_only: bool = False) -> tuple[int, int]:
    print("Start Project-Validation (Test-Coverage)...")
    l_error_counter = 0
    l_max_counter = 0

    if not C_COMPONENTS_DIR.exists():
        ErrorLog(f"Folder {C_COMPONENTS_DIR} not found. Validation failed!")
        ErrorLog(f'Validation failed: 1 Critical Error found.')
        sys.exit(1)

    for path in C_COMPONENTS_DIR.rglob("*"):
        if path.is_file() and path.suffix in [".tsx", ".ts"]:
            l_max_counter += 1
            filename = path.name

            # 3. Testdatei-Pflicht für .tsx-Komponenten
            if filename.endswith(".tsx") and not filename.endswith(".test.tsx") and not filename.endswith(".spec.tsx"):
                # Prüfe, ob eine Testdatei existiert (entweder gleicher Name mit .test.tsx oder im selben Ordner)
                test_file_1 = path.with_name(path.stem + ".test.tsx")
                test_file_2 = path.with_name(path.stem + ".spec.tsx")
                
                if not test_file_1.exists() and not test_file_2.exists():
                    print(f"[FEHLER] Fehlende Testdatei für Komponente: {path}")
                    print(f"         Erwartet: {test_file_1.name} (oder .spec.tsx)")
                    l_error_counter += 1

    if p_check_only: return l_error_counter, l_max_counter

    if l_error_counter > 0:
        print(f"\nValidation failed: {l_error_counter} Errors found.")
        sys.exit(1)
    else:
        print("\nAll Checks successful!")
        sys.exit(0)