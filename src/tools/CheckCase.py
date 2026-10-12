import os
import sys
from pathlib import Path

from common.Logging import ErrorLog, SuccessLog
from string import digits as g_digits, ascii_letters as g_ascii_letters

C_COMPONENTS_DIR = Path("./src/")
C_SUFFIXES_TO_CHECK = ('.tsx', '.ts', '.css')
C_ALLOWED_RULE_BREAKES = [
    'src\\vite-env.d.ts',
    'src\\main.tsx',
    
]

def validate_component_cases(p_check_only: bool = False) -> int | None:
    print("Start Project-Validation (Cases)...")
    l_error_counter = 0
    l_max_counter = 0

    if not C_COMPONENTS_DIR.exists():
        ErrorLog(f"Folder {C_COMPONENTS_DIR} not found. Validation failed!")
        ErrorLog(f'Validation failed: 1 Critical Error found.')
        sys.exit(1)

    def go_through_cases():
        l_error_counter_in_one_iteration = 0
        if ' ' in t_filename: 
            ErrorLog(f'Filename contains Space: {t_component_path}')
            l_error_counter_in_one_iteration += 1
            
        if any([t_letter not in g_ascii_letters + '.' for t_letter in t_filename]):
            ErrorLog(f'Filenames Non Alphabetical Rule-Break: {t_component_path}')
            l_error_counter_in_one_iteration += 1
        
        if any([t_digit in t_filename for t_digit in g_digits]):
            ErrorLog(f'Filenames contains digits: {t_component_path}')
            l_error_counter_in_one_iteration += 1
        
        if t_filename[0].islower() and str(t_component_path) not in C_ALLOWED_RULE_BREAKES:
            ErrorLog(f'Filename is not in PascalCase: {t_component_path}')
            l_error_counter_in_one_iteration += 1
        
        return l_error_counter_in_one_iteration
    
    for t_component_path in C_COMPONENTS_DIR.rglob("*"):
        if t_component_path.is_file() and t_component_path.suffix in C_SUFFIXES_TO_CHECK:
            
            t_filename = t_component_path.name
            
            l_error_counter += go_through_cases()
            l_max_counter += 4
    if p_check_only: return l_error_counter, l_max_counter

    if l_error_counter > 0:
        ErrorLog(f"Validation failed: {l_error_counter} Errors found.")
        sys.exit(1)
    else:
        SuccessLog("All Checks successful!")
        sys.exit(0)